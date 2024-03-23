const express = require('express');
const Router = express.Router();

const multer = require('multer') //multer
const upload = multer({ dest: 'uploads/course_icons' });
const userUpload = multer({dest:'uploads/user_icons'})


 const DescriptionController = require('../controllers/DescriptionController')

 
// Router.post('/register',userUpload.any(), UserController.Register);
 Router.get('/getDescriptions',DescriptionController.getDescriptions);
Router.post('/addDescriptions',DescriptionController.addDescriptions);
  Router.get('/getDescriptionsById/:id',DescriptionController.getDescriptionsById);
  // Router.get('/getworktype',DescriptionController.getworktype);
  
 Router.put('/updatedescription/:id',DescriptionController.updateDescription);
module.exports = Router;