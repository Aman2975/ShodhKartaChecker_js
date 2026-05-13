import bcrypt from 'bcrypt'
import Users from '../models/Users.js'

const register=async (req,res)=>{
    const {full_name,email,password,username}=req.body

    const hashed_password=await bcrypt.hash(password,10)

    // console.log(hashed_password)

    const emailExsist=await Users.find({email:email})
    const usernameExsist=await Users.find({username:username})

    if ( emailExsist.length>0 || usernameExsist.length>0){
        return res.status(409).json({
            "success":false,
            "message":"entred email or username is already exsist"
        })
    }

    const results= await Users.create({
        full_name:full_name,
        email:email,
        hashed_password:hashed_password,
        username:username
    })
   

   res.status(201).json({
            "success":true,
            "message":"User Registred"
        })
    }
    // console.log(emailExsist)
    // console.log(usernameExsist)
    // res.send(emailExsist,usernameExsist)
    


export default register