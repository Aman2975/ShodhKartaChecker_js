import mongoose from 'mongoose'

const webMatchSchema = new mongoose.Schema({
  job_id:          { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  url:             { type: String, required: true },
  title:           { type: String, required: true },
  score:           { type: Number, required: true },
  matched_content: { type: String },
  full_content:    { type: String },
  description:     { type: String },
  highlights:      { type: Array, default: [] },
  hybrid_score:    { type: Number },
  ng_score:        { type: Number },
  tfidf_score:     { type: Number },
  mode:            { type: String }
})

export default mongoose.model('WebMatch', webMatchSchema)