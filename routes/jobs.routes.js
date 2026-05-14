import express from 'express'
import upload from '../middlewares/upload.js'
import { jobCreate } from '../controllers/job.controller.js'

const Router = express.Router()

Router.post('/create',

     /*  #swagger.tags = ['Upload']
      #swagger.description = 'Upload a PDF file'
      #swagger.consumes = ['multipart/form-data']
      #swagger.parameters['file'] = {
        in: 'formData',
        type: 'file',
        required: true,
        description: 'PDF file to upload'
      }
      #swagger.parameters['job_name'] = {
        in: 'formData',
        type: 'string',
        required: true,
        description: 'Name of the job',
        default: ''
      }
      #swagger.parameters['page_range'] = {
        in: 'formData',
        type: 'string',
        required: false,
        description: 'Page range e.g. 1-5',
        default: ''
      }
        */

    upload.single('file'),jobCreate)

export default Router