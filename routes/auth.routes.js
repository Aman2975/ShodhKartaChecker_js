import express from 'express'

const Router=express.Router()

Router.post('/register',(req,res)=>{
    res.send("/register")
})
Router.post('/login',(req,res)=>{
    res.send("/login")
})

export default Router