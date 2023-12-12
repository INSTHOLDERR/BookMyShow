import express from "express"
import dotenv from "dotenv"
import path from "path"
import cors from "cors"

import conn from "../connection.js";
import router from "../router.js";

dotenv.config();
const app=express();
app.use(cors());
app.use(express.json())
app.use(express.static("./dist"));
app.use("/",router);
// app.get("/get",(req,res)=>{
//     return res.json("Get end point");
// });

// app.get("/*",(req,res)=>{
//     return res.sendFile(path.resolve("./dist/index.html"));
// });

conn().then(()=>{
    app.listen(process.env.VITE_PORT , error=>{
       if(error){
          console.log(error);
          return;
       }
       console.log("Server started");
    });
 })
    .catch(error=>{
       console.log(error);
 })