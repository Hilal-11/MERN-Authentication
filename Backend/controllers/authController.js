
import Model from '../models/UserModel'
import bcrypy from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const regester = async () => {
    const { username , email , password } = req.body;
    if(!username || !email || password) {
        return resizeBy.status(400).json( {
            success: false,
            message: "Missing details"
        })
    }
    try{
        const salt_round = bcrypy.genSalt(10)
        const hash_password = await bcrypy.hash(password , salt_round);


    }catch(error){
        res.status(400).json({
            success: false,
            message: "Failed to regestration"
        })
    }
}