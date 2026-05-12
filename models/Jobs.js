import mongoose from 'mongoose'

const jobSchema = new mongoose.Schema({
  user_id:              { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  job_name:             { type: String, required: true },
  filename:             { type: String, required: true },
  file_path:            { type: String },
  page_range:           { type: String },
  word_count:           { type: Number, default: 0 },
  max_similarity:       { type: Number, default: 0 },
  overall_risk:         { type: String, default: 'Low' },
  status:               { type: String, default: 'completed' },
  uploaded_text_preview:{ type: String },
  report_html_path:     { type: String },
  report_pdf_path:      { type: String },
  report_json_path:     { type: String },
  report_generated_at:  { type: Date },
  created_at:           { type: Date, default: Date.now },
  completed_at:         { type: Date }
})

export default mongoose.model('Job', jobSchema)