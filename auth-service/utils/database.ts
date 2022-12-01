import mongoose from "mongoose";

export const connectDatabase = async ()=>{
    if(!process.env.DB){
        throw new Error("Database URI is must be there...")
    }
    try {
        await mongoose.connect(process.env.DB)
        console.log(`Database connection successfull...`);
    } catch (error) {
        console.log(error);
    }
}