import bcrypt from "bcrypt";
import userSchema from "./models/userschema.js";


export async function register(req,res){
    try {
        let { username, password } = req.body;
        console.log(req.body);
        if( username.length<4 && password.length<4 ){
            return res.json("Invalid")
        }
        let hashedPass = await bcrypt.hash(String(password), 10);
        let userExist = await userSchema.findOne({ username});
        if(userExist){
            return res.status(401).send("Already Exists");
        }
        let result = await userSchema.create({ username, password: hashedPass});
        return res.status(200).send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error");
    }
}
