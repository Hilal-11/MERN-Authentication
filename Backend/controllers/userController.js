import {Model} from '../models/UserModel.js'

const getUserData = async ( req , res ) => {
    try{
        const { id } = req.body;
        const user = await Model.findById(id)
        if(!user) {
            return res.json( {
                success: false,
                message: "User not found"
            }) 
        }
        return res.json({
            success: true,
            userData: {
                name: user.username,
                isAccountVarified: user.isAccountVarified
            }
        })
    }catch(error) {
        return res.json( {
            success: true,
            message: error.message
        })
    }
}

export default getUserData