import mongoose from "mongoose";

export const connectDatabase = async()=>{
    if(!process.env.DB){
        throw new Error("Database URI must be mentioned....")
    }
    if(!process.env.JWT_SECRET){
        throw new Error("Signing key must be added....")
    }
     mongoose.connect(process.env.DB, (err)=>{
        console.log(`Database connection successfull`);
        if(err){
            console.log(`Failed to establish connection with database`);
        }
    })
}