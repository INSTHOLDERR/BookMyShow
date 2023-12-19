import mongoose from "mongoose";
export default function con(){
    console.log(process.env.DB_URI);
    return mongoose.connect(process.env.DB_URI);
}