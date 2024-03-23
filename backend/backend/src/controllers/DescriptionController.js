// const Projects = require("../Models/Projects")
const Description=require("../Models/Description")
var path = require('path')
const fs = require('fs');
 const addDescriptions = async (req, res, next) => {
    console.log(req.body)    
    const {status,project_title,type_of_work,description,work_complexity,assigned_by,start_date, end_date,no_of_days,estimated_price,completed_by,added_by,created_date} = req.body;
      
    const Descriptions = new Description({
        project_title,
        type_of_work,
        description,
        work_complexity,
        assigned_by,
        start_date,
        end_date,
        no_of_days,
        status,
        estimated_price,
        completed_by,
       
        added_by,
        
        created_date,
        
      
        });
        // if((extension!='.png' || extension != '.jpg') && size>70000){
        //     return res.status(500).json({message:"file type should be .jpg or .png and file size should not be greater than 70kb"})
        // }else{
            
        // }
        await Descriptions.save().then(
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
                message: "adding description failed"
              });
              
            }
          );
    
}
const getDescriptions = async(req,res,next)=>{
    let descriptions;
    try{
        descriptions = await Description.find()
    } catch(err){
        console.log(err)
    }
    if(!descriptions){
        return res.status(500).json({message:"Users not found"})
    }
    return res.status(200).json({descriptions});
}
const getDescriptionsById = async (req, res, next) => {
    try {
        let id = req.params.id;
        let Descriptions = await Description.find({ _id: id });
        if (!Descriptions) {
            return res.status(404).json({ message: "Descriptions not found" });
        }
        return res.status(200).json({ Descriptions });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}

  const updatedescription = async (req, res, next)=>{
    const _id = req.params.id
    let descriptiondata;
    try{
      descriptiondata= await Eventformdata.findById({_id});
        console.log(descriptiondata)
    }catch(err){
        return console.log(err)
    }
    if(!descriptiondata){
        return res.status(400).json({message:"No event Found."})
    }
    return res.status(201).json({descriptiondata})
  }
  const Updateeventformdata = async (req, res, next)=>{
    const _id = req.params.id
    const {status,project_title,type_of_work,description,work_complexity,assigned_by,start_date, end_date,no_of_days,estimated_price,completed_by,added_by,created_date} = req.body;
    
    let studdata;
    try{
        studdata = await Description.findByIdAndUpdate(_id,{
            project_title,
            type_of_work,
            description,
            work_complexity,
            assigned_by,
            start_date,
            end_date,
            no_of_days,
            status,
            estimated_price,
            completed_by,
           
            added_by,
            
            created_date,
            
        });
    }catch(err){
        return console.log(err)
    }
    if(!studdata){
        return res.status(400).json({message:"Unable to update the DESCRIPTION."})
    }
    return res.status(200).json({studdata})
  }
  // const getworktype = async (req, res, next) => {
  //   try {
  //     const workData = await Description.find({}, "type_of_work").lean();
  //     const counts = {};
  //     workData.forEach((item) => {
  //       counts[item.type_of_work] = (counts[item.type_of_work] || 0) + 1;
  //     });
  //     const aggregatedData = Object.keys(counts).map((type_of_work) => ({
  //       _id: type_of_work,
  //       count: counts[type_of_work],
  //     }));
  //     res.json({ work: aggregatedData });
  //   } catch (error) {
  //     console.error("Error fetching work type data:", error);
  //     res.status(500).json({ error: "Internal server error" });
  //   }
  // };
  
  // Start the server
  
  


exports.addDescriptions = addDescriptions;
exports.getDescriptions = getDescriptions;
exports.getDescriptionsById = getDescriptionsById;
exports.updateDescription = Updateeventformdata;
// exports.getworktype = getworktype;




