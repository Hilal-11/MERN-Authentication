


import express from 'express'
import { regester , login , logout } from '../controllers/authController.js'

const authRouter = express.Router();
export default authRouter;
authRouter.post('/regester' , regester);
authRouter.post('/login' , login);
authRouter.post('/logout' , logout);

