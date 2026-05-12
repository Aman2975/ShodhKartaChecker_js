import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  email:           { type: String, required: true, unique: true },
  username:        { type: String, required: true, unique: true },
  hashed_password: { type: String, required: true },
  full_name:       { type: String },
  role:            { type: String, default: 'user' },
  is_active:       { type: Boolean, default: true },
  created_at:      { type: Date, default: Date.now }
})



export default mongoose.model('User', userSchema)