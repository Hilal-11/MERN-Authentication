


import express from 'express'
import { regester , login , logout, sendVarifyOtp, varifyEmail, isAuthenticated, sendResetOtp, resetPassword } from '../controllers/authController.js'
import userAuth from '../middleware/userAuth.js';
const authRouter = express.Router();

authRouter.post('/regester' , regester);
authRouter.post('/login' , login);
authRouter.post('/logout' , logout);
authRouter.post('/send-varify-otp' , userAuth , sendVarifyOtp);
authRouter.post('/varify-account' , userAuth , varifyEmail);
authRouter.get('/is-auth' , userAuth ,isAuthenticated)
authRouter.post('/send-reset-otp' , sendResetOtp)
authRouter.post('/resetPassword' , resetPassword)





export default authRouter;
