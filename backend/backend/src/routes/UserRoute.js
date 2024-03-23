const express = require('express');
const Router = express.Router();

const multer = require('multer') //multer
const upload = multer({ dest: 'uploads/course_icons' });
const userUpload = multer({dest:'uploads/user_icons'})


const UserController = require('../controllers/UserController')


// Router.post('/register',userUpload.any(), UserController.Register);
Router.get('/users-list',UserController.getUsers);

module.exports = Router;