import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const key = process.env.jwt

const isAdmin=async (req,res,next)=>{
    const authHeader=req.headers.authorization
    const token=authHeader.split(" ")[1]
    const decode=await jwt.verify(token,key)
    req.user=decode
    const role=req.user.results[0].role
    if(role === 'admin'){
        next()
    }
    else {res.status(400).json({
        "success":false,
        "message":"please login as Admin"
        
    })
}

}
const isUser=async (req,res,next)=>{
    const authHeader=req.headers.authorization
    const token=authHeader.split(" ")[1]
    const decode=await jwt.verify(token,key)
    req.user=decode
    const role=req.user.results[0].role
    if(role === 'user'){
        next()
    }
    else { res.status(400).json({
        "success":false,
        "message":"please login as User"

    })
}


}

export {isAdmin,isUser}