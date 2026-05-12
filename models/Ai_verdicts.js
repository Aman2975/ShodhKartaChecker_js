import mongoose from 'mongoose'
// import mongoose from 'mongoose'

const aiVerdictSchema = new mongoose.Schema({
  job_id:           { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true, unique: true },
  // unique: true because MySQL had UNIQUE on job_id — one verdict per job
  verdict:          { type: String, required: true },
  confidence:       { type: Number, default: 0 },
  plagiarism_type:  { type: String },
  severity:         { type: String },
  explanation:      { type: String },
  suggested_action: { type: String }
})

export default mongoose.model('AiVerdict', aiVerdictSchema)