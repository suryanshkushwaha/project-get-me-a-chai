"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/db/ConnectDB"
import User from "@/models/User"


export const initiate = async (amount, to_username, paymentform) => {
    await connectDB()

    let user = await User.findOne({username: to_username})
    const secret = user.razorpaysecret

    var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_KEY_ID, key_secret: secret})

    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options)

    await Payment.create({ oid: x.id, amount: amount/100, to_user: to_username, name: paymentform.name, message: paymentform.message })

    return x

}

export const fetchuser = async (username) => {
    await connectDB()
    let u = await User.findOne({ username: username })
    let user = u.toObject({ flattenObjectIds: true })
    return user
}

export const fetchpayments = async (username) => {
    await connectDB()
    // find all payments sorted by decreasing order of amount and flatten object ids
    let p = await Payment.find({ to_user: username, done:true }).sort({ amount: -1 }).limit(10).lean()
    return p
}

export const updateProfile = async (data, oldUserName) => {
    await connectDB()
    let ndata = Object.fromEntries(data)

    if (ndata.username !== oldUserName) {
        let u = await User.findOne({ username: ndata.username })
        if (u) {
            return ({ error: "Username already exists" })
        }
    }

    await User.updateOne({ email: ndata.email }, ndata)
    return ({ success: "Profile updated" }) 
}