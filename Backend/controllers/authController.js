
import {Model} from '../models/UserModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import transporter from '../config/nodemailer.js';
import dotenv from 'dotenv'
dotenv.config()
export const regester = async (req , res) => {
    // SIMPLE VALIDATION
    const { username , email , password } = req.body;

    if(!username || !email || !password) {
        return res.status(400).json( {
            success: false,
            message: "Missing details"
        })
    }
    try{
        // CHECK EXISTING USER 
        const userExists = await Model.findOne({ email })
        if(userExists) {
            return res.status(400).json({
                success: false,
                message: "username and email already exists"
            })
        }
         // HASH THE PASSWORD 
        //  const salt_round = bcrypt.genSalt(10)
         const hash_password = await bcrypt.hash(password , 10);

         
        const user = await Model.create({
            username,
            email,
            password: hash_password,
        })
        // GENERATE TOKEN
        const token = await jwt.sign(
                { userId: user._id, email: user.email} ,
                    process.env.SECRET_KEY,
                {
                    expiresIn: '7d'
                }
            )

        res.cookie('token' , token , {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none': 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        })
        // SEND EMAIL
        const mail = {
            from: process.env.SENDER_EMAIL,
            to: email , // list of receivers
            subject: "Welcome to Webmastry.pro", // Subject line
            text: `welcome to webmastery.pro your account has created with email id: ${email}`, // plain text body
            html: "<b>Hello there i am hiala , founder of <h2>Webmastery.pro</h2></b>", // html body
        }

        await transporter.sendMail(mail)
            .then(info => {
                console.log("Mail sent successfully", info)
            }).catch(err => {
                console.log("Failed to sent email", err)
            })

        return res.json({
            success: true,
            message: "Successful regestration"
        })

    }catch(error){
        res.status(400).json({
            success: false,
            message: "Failed to regestration"
        })
    }
}


export const login = async (req , res) => {
    const { email , password } = req.body;
    if(!email || !password) {
        return res.status(400).json( {
            success: false,
            message: "Email and password is required"
        })
    }
    try{
        const userExists = await Model.findOne({ email });
        if(!userExists) {
            res.status(400).json({
                success: true,
                message: "Invalid email and password"
            })
        }

        // COMPARE PASSWORD
        const isMatch = await bcrypt.compare(password , userExists.password)

        if(!isMatch) {          
            res.status(400).json({
                success: true,
                message: "Invalid email and password"
            })
        }

        //  GENERATE TOKEN FOR LOGIN SUCCESSFULL
        const token = await jwt.sign({ userId: userExists._id, email: userExists.email} ,
            process.env.SECRET_KEY,
        {
            expiresIn: '7d'
        })

        res.cookie('token' , token , {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none': 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        })


        // res.status(200).json({
        //     success: true,
        //     message: "Successfully Login",
        //     userId: userExists._id.toString(),
        //     token: token,
        // })

        return res.json({
            success: true
        })

        
    }catch(error) {
        res.status(400).json({
            success: false,
            message: "Failed to Login"
        })
    }
}



export const logout = async (req , res) => {
    try{
        
        res.clearCookie('token' , {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none': 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        })

        return res.json({
            success: true,
            message: "Logged Out"
        })

        
    }catch(error) {
        res.status(400).json({
            success: false,
            message: "Failed to Logout"
        })
    }
}