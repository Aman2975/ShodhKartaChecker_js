import Jobs from '../models/Jobs.js'

const jobCreate =(req,res,next)=>{
    if (req.file){

    console.log(req.file)
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