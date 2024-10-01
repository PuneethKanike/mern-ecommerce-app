

//placing orders using COD method

import orderModel from "../models/order.model.js"
import userModel from "../models/user.model.js"

const placeOrder = async (req, res) => {
    try {
        const {userId, items, amount, address} = req.body
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: 'COD',
            payment: false,
            date:Date.now(),
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, {
            cartData:{}
        }
        )

        res.json({
            success: true,
            message: 'Order Placed Successfully',
        })

    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: error.message,
        })
    }

}

//placing orders using stripe method

const placeOrderStripe = async (req, res) => {
    
}

//placing orders using razorpay method

const placeOrderRazorpay = async (req, res) => {
    
}

//get all orders

const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        res.json({
            success: true,
            orders,
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: error.message,
        })
    }
}

//user order data for frontend

const userOrders = async (req, res) => {
    try {
        
        const {userId} = req.body 
        const orders = await orderModel.find({userId})
        res.json({
            success: true,
            orders,
        })

    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: error.message,
        })
    }
}


//update order status from admin panel

const updateStatus = async (req, res) => {
    
}

export {
    placeOrder,
    placeOrderStripe,
    placeOrderRazorpay,
    allOrders,
    userOrders,
    updateStatus
}