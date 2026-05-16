// services/pythonService.js
import axios from 'axios'
import FormData from 'form-data'

const FASTAPI_URL = 'http://127.0.0.1:8000'

export const detectPlagiarism = async (file, jobName, pageRange = '') => {
  try {
    // build multipart form with raw buffer
    const form = new FormData()
    form.append('file', file.buffer, {
      filename:    file.originalname,
      contentType: file.mimetype
    })
    form.append('job_name', jobName)
    form.append('page_range', pageRange)

    const response = await axios.post(`${FASTAPI_URL}/detect`, form, {
      headers: { ...form.getHeaders() },
      timeout: 120000
    })

    return response.data

  } catch (err) {
    if (err.code === 'ECONNREFUSED') throw new Error('Python engine is not running')
    if (err.code === 'ECONNABORTED') throw new Error('Python engine timed out')
    throw new Error(err.response?.data?.detail || 'Python engine failed')
  }
}