import mongoose from "mongoose";
import { Password } from "../utils/password";

// defining required user attributes
interface UserAttributes{
    username: string
    email: string,
    password: string
}

interface UserModel extends mongoose.Model<UserDoc>{
    build(attributes: UserAttributes):UserDoc;
}

interface UserDoc extends mongoose.Document{
    email:string,
    password:string
}

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
    },
})

// hashing the password before storing in the database
userSchema.pre("save", async function(done){
    if(this.isModified("password")){
        const hashed = await Password.toHash(this.get("password"))
        this.set("password", hashed)
    }
    done()
})

userSchema.statics.build = (attributes: UserAttributes)=>{
    return new User(attributes)
}

export const User = mongoose.model<UserDoc, UserModel>("user", userSchema)