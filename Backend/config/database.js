
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()
const connectDB = async () => {
   try{
        await mongoose.connect(process.env.DATABASE_URI)
        console.log("Database connection successfully")
   }catch(error) {
        console.log(error.message)
        console.log("Failed to connect with Database")
   }
}
export default connectDB;

