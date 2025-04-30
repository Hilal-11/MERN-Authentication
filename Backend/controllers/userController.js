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
            userData: {
                name: user.username,
                isAccountVarified: user.isAccountVarified
            },
            success: true,

        })
    }catch(error) {
        return res.json( {
            success: false,
            message: error.message
        })
    }
}

export default getUserData