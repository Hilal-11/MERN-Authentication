
import express from 'express';
const app = express();
import cors from 'cors'
import authRouter from './routes/authRoutes.js'
import userRouter from './routes/userRoutes.js';
import connectDB from './config/database.js'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT;


app.use(cors({
    credentials: true
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded bodies
app.use(cookieParser())
app.use('/api/auth' , authRouter);
app.use('/api/user' , userRouter);


app.get('/' , (req , res) => {
    res.send("<h1>MERN Authentication and Autherization</h1>")
})

app.listen(PORT , () => {
    console.log(`App is running on PORT ${PORT}`)
})

connectDB();