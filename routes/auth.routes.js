import express from 'express'
import register from '../controllers/register.controller.js'
import login from '../controllers/login.controller.js'


const Router=express.Router()


Router.post('/register',
     /*  #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: {
          full_name: '',
          email: '',
          password: '',
          username: ''
        }
  }

  */      
  
    register)
Router.post('/login',
    
     /*  #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: {
        
          email: 'aman@gmail.com',
          password: '123456',
          
        }
  } */

    login)

export default Router