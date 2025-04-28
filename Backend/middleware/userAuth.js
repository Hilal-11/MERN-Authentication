import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
const userAuth = async (req , res , next) => {
    const { token } = req.cookies;
    if(!token) {
        return res.json({
            success: false,
            message: "Not Autherize Login Again"
        })
    }
    try{
        const decodeToken = jwt.verify(token , process.env.SECRET_KEY)
        if(decodeToken.id) {
            req.body.userId = decodeToken.id
        }else{
            return res.json({ success: false, message : "Not Autherized Login Again"})
        }

        next();
    }catch(error){
        return res.json({ success: false , message: error.message });
    }
}
export default userAuth