// const Projects = require("../Models/Projects")
const Projects = require("../Models/Projects");
var path = require('path')
const fs = require('fs');
 const addProjects = async (req, res, next) => {
    console.log(req.body)    
    const {status,git_url,git_collabrators,project_name,branch_protection,project_description,url, public_ip,local_ip,db_name,active_status,maintaining_by,department,added_by,git_status,created_date} = req.body;
      
    const project = new Projects({
        project_name,
        project_description,
        url,
        public_ip,
        local_ip,
        db_name,
        active_status,
        maintaining_by,
        department,
        git_status,
         git_url,
        git_collabrators,
        branch_protection,
        added_by,
        created_date,
        
        status,
        });
        // if((extension!='.png' || extension != '.jpg') && size>70000){
        //     return res.status(500).json({message:"file type should be .jpg or .png and file size should not be greater than 70kb"})
        // }else{
            
        // }
        await project.save().then(
            () => {
              res.status(201).json({
                message: 'Post saved successfully!'
              });
            }
          )
          .catch(
            (error) => {
                console.log(error)
              res.status(400).json({
                message: "adding project failed"
              });
              
            }
          );
    // if (!user) {
    //     return res.status(500).json({ message: "User details not saved" })
    // }
    // return res.status(201).json({ message:"User Added successfully" })
}

 const getProjects = async(req,res,next)=>{
    let projects;
    try{
        projects = await Projects.find({})
    } catch(err){
        console.log(err)
    }
    if(!projects){
        return res.status(500).json({message:"Users not found"})
    }
    return res.status(200).json({projects})
}

const getProjectsById = async(req,res,next)=>{
  let projects;
  let id = req.params.id;
  try{
      projects = await Projects.find({_id:id})
  } catch(err){
      console.log(err)
  }
  if(!projects){
      return res.status(500).json({message:"Users not found"})
  }
  return res.status(200).json({projects})
}

const updateproject = async (req, res, next)=>{
  const _id = req.params.id
  let projectdata;
  try{
    projectdata= await Eventformdata.findById({_id});
      console.log(projectdata)
  }catch(err){
      return console.log(err)
  }
  if(!projectdata){
      return res.status(400).json({message:"No event Found."})
  }
  return res.status(201).json({projectdata})
}
const Updateeventformdata = async (req, res, next)=>{
  const _id = req.params.id
  const {status,git_url,git_collabrators,project_name,branch_protection,project_description,url, public_ip,local_ip,db_name,active_status,maintaining_by,department,updated_by,added_by,git_status,created_date} = req.body;
  
  let studdata;
  try{
      studdata = await Projects.findByIdAndUpdate(_id,{
        project_name,
        project_description,
        url,
        public_ip,
        local_ip,
        db_name,
        active_status,
        maintaining_by,
        department,
        git_status,
         git_url,
        git_collabrators,
        branch_protection,
        added_by,
        updated_by,
        created_date,
        
        status,
          
      });
  }catch(err){
      return console.log(err)
  }
  if(!studdata){
      return res.status(400).json({message:"Unable to update the users."})
  }
  return res.status(200).json({studdata})
}



exports.addProjects = addProjects;
exports.getProjects = getProjects;
exports.getProjectsById = getProjectsById;
exports.updateProjects = Updateeventformdata;