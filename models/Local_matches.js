import mongoose from 'mongoose'

const localMatchSchema = new mongoose.Schema({
  job_id:          { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  title:           { type: String, required: true },
  score:           { type: Number, required: true },
  matched_content: { type: String },
  full_content:    { type: String },
  highlights:      { type: Array, default: [] },   // was JSON DEFAULT ('[]')
  quality:         { type: String, default: 'low' }
})

export default mongoose.model('LocalMatch', localMatchSchema)