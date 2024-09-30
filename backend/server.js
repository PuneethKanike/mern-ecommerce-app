import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/mongodb.js'
import connectCloud from './config/cloudinary.js'
import UserRouter from './routes/user.route.js'
import productRouter from './routes/product.route.js'
import cartRouter from './routes/cart.route.js'

//App config
const app = express()
const port = process.env.PORT || 4000
connectDb()
connectCloud()

//Middleware
app.use(express.json())
app.use(cors())

//API endpoints
app.use('/api/user',UserRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)

app.get('/',(req,res)=>{
    res.send("api working")
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})