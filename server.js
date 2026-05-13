import express from 'express'
import fs from "fs";
import cors from 'cors'
import errorHandler from './middlewares/errorHandler.js'
import authRoutes from './routes/auth.routes.js'
// import swaggerSpec from './config/swagger.js'
import swaggerUi from 'swagger-ui-express'
// import swaggerFile from './swagger/swagger-output.json' assert { type: "json" };
// import swaggerAutogen from 'swagger-autogen'
// import connectDB from './config/db.js'

import { createRequire } from "module";
import connectDB from './config/db.js'


const require = createRequire(import.meta.url);
const swaggerFile = require("./swagger-output.json"); 

const app=express()

app.listen(5000,()=>{
    console.log("app is running") 
})

connectDB()


app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get('/health',(req,res)=>{
    res.send("healthy app")
})

app.use('/auth',authRoutes)

app.use(errorHandler)