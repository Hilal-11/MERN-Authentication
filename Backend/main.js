
import express from 'express';
const app = express();
import cors from 'cors'
import app_routes from './routes/app_routes'
import connectDB from '.config/database'
import bodyParser from 'cookie-parser'
import cookieParser from 'cookie-parser';
require('dotenv').config();
const PORT = process.env.PORT;


app.use(cors({
    credentials: true
}))
app.use(express.json());
app.use(cookieParser())
app.use('/api/v1' , app_routes);

app.get('/' , (req , res) => {
    res.send("<h1>MERN Authentication and Autherization</h1>")
})

app.listen(PORT , () => {
    console.log(`App is running on PORT ${PORT}`)
})

connectDB();