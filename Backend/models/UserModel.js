import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
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

// userModel.methods.generateToken = async function() {
//     try{
//         return jwt.sign(
//             { userId: this._id.toString(), email: this.email} ,
//             process.env.SIGNITURE,
//             {
//                 expiresIn: '5h'
//             }
//         )
//     }catch(error) {
//         console.log(error.message)
//     }
// }

export const Model = mongoose.model('Model', userModel)

