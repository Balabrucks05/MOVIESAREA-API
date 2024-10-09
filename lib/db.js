import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

const connectDb = async() => {
    
  try {
    await mongoose.connect(process.env.Mongodb_URI);
        console.log("MongoDB Connected...");
        
  } catch (error) {
    console.log(12);
    
    console.error(error.message);
    process.exit(1);
    
  }
};

export default connectDb;