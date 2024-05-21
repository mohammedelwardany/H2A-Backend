import mongoose from "mongoose";
import { DB_CONNECTION, DB_NAME } from "../../constants";

export const connect: () => void = () =>{
    mongoose.connect(DB_CONNECTION,{
        dbName:DB_NAME,
    }).then(()=>{
        console.log("Database is Connecting...");
    }).catch((err)=> console.log(err))
}

