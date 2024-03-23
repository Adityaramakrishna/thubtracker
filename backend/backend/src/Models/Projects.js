
const mongoose = require('mongoose');

const schema = mongoose.Schema;
const Projects = new schema({
    project_name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    project_description: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 500
    },
    url: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50,
        
    },
    public_ip: {
        type: String,
        required: true,
    
    },
    local_ip:{
        type:String,
        required:true,
    },
    
    db_name: {
        type: String,
    },
    active_status: {
        type: String,
        minlength: 1,
        maxlength: 20
    },
    maintaining_by: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 200
    },
    department:{
        type:String,
        required:true,
        minlength:1,
        maxlength:50
    },
    git_status:{
        type:String,
        required:true,
        minlength:1,
        maxlength:50
    },
    git_url: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    git_collabrators: {
        type: String,
        minlength: 1,
        maxlength: 50
    },
    branch_protection: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    added_by: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50,
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
    
    
    status: {
        type: Number,
        required: true,
        minlength: 1,
        maxlength: 50
    }
    

});

module.exports = mongoose.model("Projects", Projects);
    

