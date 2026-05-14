import bcrypt, { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'
import Users from '../models/Users.js'
import dotenv from 'dotenv'

dotenv.config()

// const key = process.env.jwt


const login=async (req,res)=>{
    
    const {email,password}=req.body
    
    // console.log(key)

    const results=await Users.find({email:email})
    const isMatch= await compare(password,results[0].hashed_password)
    // const isMatch=true
    // console.log(results[0].hashed_password)
    
    if(results.length === 0 || isMatch === false){
        return res.status(409).json({
            "success":false,
            "message":"invalid email or password"
        })
    }


        
         const token=await jwt.sign({results},
            process.env.jwt,
            {expiresIn:"1h"}
         )

         console.log(token)

    
          res.status(200).json({
            "success":true,
            "message":"login done",
            "data":{
                "full_name":results[0].username,
                "jwt":token
            }
          })
    
}

export default login