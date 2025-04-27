import mongoose, { mongo } from 'mongoose'

const userModel = mongoose.Schema({
    username: { type: String, required: true},

    email: { type: String, required: true, unique: true},

    password: { type: String, required: true,},

    varifyOtp: { type: String, default: ""},

    varifyOtpExpireAt: { type: String , default: 0},

    isAccountVarified: { type: Boolean, default: false},

    resetOtp: { type: String, default: ""},
    
    resetOtpExpireAt: { type: Number, default: 0},
})

module.exports = mongoose.model("Model" , userModel)
