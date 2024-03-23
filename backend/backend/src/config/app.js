const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')
const userRouter = require('../routes/UserRoute');
const projectRouter=require('../routes/ProjectRoute');
const descriptionRouter=require('../routes/DescriptionRoute')
const app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors())  
app.use('/', userRouter);
app.use('/', projectRouter);
app.use('/', descriptionRouter)
// app.use('/users-list',Router);
mongoose.connect("mongodb+srv://adityaramakrishna4:TQm1emQRGZGOw6Yo@cluster0.tclcyxz.mongodb.net/cluster0?retryWrites=true&w=majority&appName=Cluster0").then(()=>console.log('connected to database'))
.then(()=>{
    app.listen(5001)
}).catch((err)=>console.log(err))
    