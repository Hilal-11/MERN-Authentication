
import Model from '../models/UserModel'
import bcrypy from 'bcryptjs'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose';
export const regester = async () => {
    // SIMPLE VALIDATION
    const { username , email , password } = req.body;
    if(!username || !email || password) {
        return resizeBy.status(400).json( {
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
         const salt_round = bcrypy.genSalt(10)
         const hash_password = await bcrypy.hash(password , salt_round);

         
        const user = Model.create({
            username,
            email,
            password: hash_password,
        })

        // GENERATE TOKEN

        const token = jwt.sign(
                { userId: user._id, email: user.email} ,
                    process.env.SECRET_KEY,
                {
                    expiresIn: '7d'
                }
            )

        res.cookie("token" , token , {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production'
        })
        res.status(200).json({
            success: true,
            message: "Successfully regester thr user",
            userId: user._id.toString(),
            token: token,
        })

    }catch(error){
        res.status(400).json({
            success: false,
            message: "Failed to regestration"
        })
    }
}