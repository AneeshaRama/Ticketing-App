import mongoose from "mongoose";
import {Password} from "../utils/password"

interface UserAttributes{
    username:string,
    email:string,
    password:string
}

interface UserDoc extends mongoose.Document{
    username:string,
    email:string,
    password:string
}

interface UserModel extends mongoose.Model<UserDoc>{
    build(attributes: UserAttributes): UserDoc
}

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        trim:true
    },
    email: {
        type:String,
        required:true,
        trim:true
    },
    password: {
        type:String,
        required:true,
    },

},{
    toJSON:{
        transform(doc,ret){
            ret.id = ret._id
            delete ret._id;
            delete ret.password
            delete ret.__v
        }
    }
})

userSchema.pre("save", async function(done){
    if(this.isModified("password")){
        const hashed = await Password.toHash(this.get("password"))
        this.set("password", hashed)
    }
    done()
})

userSchema.statics.build = (attributes: UserAttributes)=>{
    return new User(attributes);
}

export const User = mongoose.model<UserDoc, UserModel>("user", userSchema);



