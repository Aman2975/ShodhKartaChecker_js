import express from 'express'
import cors from 'cors'
import authRoutes from './routes/auth.routes.js'

const app=express()

app.listen(5000,()=>{
    console.log("app is running")
})

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/health',(req,res)=>{
    res.send("app is running")
})

app.use('/auth',authRoutes)