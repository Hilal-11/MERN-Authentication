


import express from 'express'
import { regester , login , logout } from '../controllers/authController.js'
export default authRouter = express.Router();

authRouter.post('/regester' , regester);
authRouter.post('/login' , login);
authRouter.post('/logout' , logout);

