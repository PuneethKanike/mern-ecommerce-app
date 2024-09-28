import mongoose from "mongoose";

const connectDb = async ()=> {
    mongoose.connection.on('connected',()=>{
        console.log('MongoDB connected')
    })
    await mongoose.connect(`${process.env.MONGO_URI}/mern-e-commerce`)
}

export default connectDb