import mongoose from "mongoose";
const schema=new mongoose.Schema({
    moviename:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
});
export default mongoose.model.movies || mongoose.model("movie",schema);