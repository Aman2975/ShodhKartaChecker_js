import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const uri=process.env.uri
// console.log(uri)

const connectDB = async () => {
  await mongoose.connect(uri)
  console.log('MongoDB connected')
}

export default connectDB