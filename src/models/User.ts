import { IUser } from "../interfaces/IUser";
import { model, Schema } from "mongoose";


const userSchema = new Schema<IUser>({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    role:{
        type: String,
        enum:["admin","superadmin","editor"],
    }
})


const User = model('user',userSchema);
export default User;