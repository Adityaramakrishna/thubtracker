
const mongoose = require('mongoose');

const schema = mongoose.Schema;
const Descriptions = new schema({
    project_title: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    type_of_work: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 500
    },
    description: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 500,
        
    },
    work_complexity: {
        type: String,
        required: true,
    
    },
    assigned_by:{
        type:String,
        required:true,
    },
    
    start_date: {
        type: Date,
        required:true,
       
    },
    end_date: {
        type: Date,
        required:true,
        
    },
    no_of_days: {
        type: Number,
        required: true,
        minlength: 2,
        maxlength: 200
    },
    status:{
        type:String,
        required:true,
        minlength:1,
        maxlength:50
    },
    estimated_price:{
        type:Number,
        required:true,
        minlength:1,
        maxlength:50
    },
    completed_by: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    added_by: {
        type: String,
        minlength: 1,
        maxlength: 50
    },
   
    // updated_by: {
    //     type: String,
    //     required: true,
    //     minlength: 1,
    //     maxlength: 50
    // },
    created_date:{
        type:String,
    },
    
    
    
    

});

module.exports = mongoose.model("Descriptions", Descriptions);
    

