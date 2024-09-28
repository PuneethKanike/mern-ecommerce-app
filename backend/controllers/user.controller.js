import userModel from "../models/user.model.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET, {
    })
}

//Route for user login
const loginUser = async (req, res) => {
     try {
        const {email, password} = req.body;
     const user = await userModel.findOne({email})
     if(!user){
         return res.json({success: false, message: "User not found"})
     }
     const isMatch = await bcrypt.compare(password, user.password)
     if(isMatch){
         const token = createToken(user._id)
         res.json({success: true, message: "User logged in successfully", token})
     }else{
         res.json({success: false, message: "Invalid credentials"})
     }
     } catch (error) {
        console.log(error)
        res.json({success: false, message:error.message})
     }

}

//Route for user signup
const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        //checking user already exists or not
        const exists = await userModel.findOne({email})
        if(exists){
            return res.json({success: false, message: "User already exists"})
        }

        //validating email format and strong format
        if(!validator.isEmail(email)){
            return res.json({success: false, message: "Invalid email format"})
        }
        if(password.length < 8){
            return res.json({success: false, message: "Password must be at least 8 characters"})
        }

        //hashing password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //creating new user
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })
        const user = await newUser.save()

        const token = createToken(user._id)
        res.json({success: true, message: "User registered successfully", token})



    } catch (error) {
        console.log(error)
        res.json({success: false, message:error.message})
    }
}

//Route for admin login
const adminLogin = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password, process.env.JWT_SECRET)
            res.json({success: true, message: "Admin logged in successfully", token})
        }else{
            res.json({success: false, message: "Invalid credentials"})
        }
    } catch (error) {
        
    }
}

export{loginUser, registerUser, adminLogin}