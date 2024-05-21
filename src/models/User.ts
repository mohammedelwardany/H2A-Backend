import { model, Schema } from "mongoose";


const userSchema = new Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
    },
    password:{
        type: String,
    },
    role:{
        enum:["superadmin","admin"],
    }
})


const User = model('user',userSchema);
export default User;