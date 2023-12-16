import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userSchema from "./models/userschema.js";
const { sign } = jwt;


export async function register(req,res){
    try {
        let { username, password ,repassword} = req.body;
        console.log(req.body);
        if( username.length<4 || password.length<4 || password !== repassword){
            return res.status(401).send("invalid");
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

export async function login(req, res) {
    try {
        let { username, password } = req.body;
        if( username.length < 4 && password.length < 4) {
            return res.status(403).send("Invalid username or password");
        }
        let user = await userSchema.findOne({ username });
        if(!user) {
            return res.status(403).send("Invalid username or password");
        }
        let passCheck = await bcrypt.compare(password, user.password);
        if(passCheck) {
            let token = await sign({
                username: user.username,
                id: user._id
            },
            process.env.SECRET_KEY,
            {
                expiresIn: "24h"
            })
            return res.status(200).json({
                msg: "Login successful...",
                token: token
            })
        }
        return res.status(403).send("invalid username or password")
    } catch (error) {
        console.log(error);
        res.status(500).send("Error");
    }
}