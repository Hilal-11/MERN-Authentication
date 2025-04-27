import express from 'express'
import { regester , login , logout } from '../controllers/authController'
const authRouter = express.Router();

authRouter.post('/regester' , regester);
authRouter.post('/login' , login);
authRouter.post('/logout' , logout);

module.exports = router;