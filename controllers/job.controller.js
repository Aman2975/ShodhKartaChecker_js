import Jobs from '../models/Jobs.js'
import { detectPlagiarism } from '../services/pythonService..js'

const jobCreate =async (req,res,next)=>{


    if (req.file){

        const {job_name,page_range}=req.body

        const file = req.file

        const data= await detectPlagiarism(file,job_name,page_range)

        console.log(data)

    // console.log(req.file)
    // console.log(job_name)
    console.log("file is uploaded")
   return  res.status(400).json({
        "success":true,
        "message":"file is uploded"
    })
}

    res.status(400).json({
     "success":false,
     "message":"file is not uploded"})
    }


    export {jobCreate}