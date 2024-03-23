import React, { useState,useEffect } from "react"
import { useParams } from 'react-router-dom';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Input,
  FormGroup,
  Label,
  Button,
} from "reactstrap"
import axios from "axios";



// Import Editor
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"


import "react-datepicker/dist/react-datepicker.css"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
const axiosAPI = axios.create();
let APP_URL = process.env.REACT_APP_DATABASEURL;
const EditDescription = () => {
  const inpRow = [{ name: "", file: "" }]

  const { projectid } = useParams();
  const [pro,setProject]=useState({
    project_title:"",
    type_of_work:"",
    description:"",
    work_complexity:"",
    assigned_by:"",
    start_date:"",
    end_date:"",
    no_of_days:"",
    status:"",
    estimated_price:"",
    completed_by:"",
   
    added_by:"",
    
    created_date:new Date().toLocaleString('en-US', {timeZone: 'Asia/Kolkata'}),
    
    })
// const api=APP_URL+'addeventform';
// const {id} = useParams()
const id = window.location.pathname.split('/')[2];
// console.log(pathname)
    useEffect(()=>{
      console.log("sss")
      console.log(id)
    //  axiosAPI.get('http://localhost:5001/getProjectsbyid/'+id)
      axiosAPI.get(APP_URL+`getdescriptionsById/`+id)
        .then((res)=>{console.log(res.data.Descriptions[0])
        setProject(res.data.Descriptions[0])
      
        console.log(res.data)
      }
        )
        .catch((err)=>console.log(err))
    },[])
    const handleEdit=(e)=>{
        e.preventDefault();
        console.log(pro)
        //http://localhost:3000/form
        axiosAPI.put('http://localhost:5001/updateDescription/'+id,pro)
        .then((result)=>
        {
            alert("Updated successfully.")
            window.location.href='/dashboard';

        })
    }

return (
    <> description
      <div className="page-content">
        
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Tasks" breadcrumbItem="Create Task" />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <CardTitle className="mb-4" style={{color:"Black"}}><b>EDIT DATA</b></CardTitle>
                  <form className="outer-repeater" onSubmit={handleEdit}>
                    <div data-repeater-list="outer-group" className="outer">
                      <div data-repeater-item className="outer">
                        <FormGroup className="mb-4" row >
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                           project title
                          </Label>
                          <Col lg="10">
                            <Input
                              id="project_title"
                              name="project_title"
                              type="text"
                              className="form-control"
                              placeholder="Enter project name..."
                              defaultValue={typeof(pro)!='undefined'?pro.project_title:""} 
                              onChange={(e)=>setProject({...pro,project_title:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            Type Of Work
                          </Label>
                          <Col lg="10">
                            <Input
                              id=" type_of_work"
                              name=" type_of_work"
                              type="text"
                              className="form-control"
                              placeholder="Enter  type_of_work..."
                              value={pro. type_of_work} 
                              onChange={(e)=>setProject({...pro, type_of_work:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            description
                          </Label>
                          <Col lg="10">
                            <Input
                              type=" text"
                              name=" description"
                              id=" description"
                              className="form-control"
                              value={pro. description} 
                              onChange={(e)=>setProject({...pro, description:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            work_complexity
                          </Label>
                          <Col lg="10">
                            <Input
                              type="text"
                              name="work_complexity"
                              id="work_complexity"
                              className="form-control"
                              value={pro.work_complexity} 
                              onChange={(e)=>setProject({...pro,work_complexity:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            assigned_by
                          </Label>
                          <Col lg="10">
                            <Input
                              type="text"
                              name="assigned_by"
                              id="assigned_by"
                              className="form-control"
                              value={pro.assigned_by} 
                              onChange={(e)=>setProject({...pro,assigned_by:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            start_date
                          </Label>
                          <Col lg="10">
                            <Input
                              type="date"
                              name="start_date"
                              id="start_date"
                              className="form-control"
                              value={pro.start_date} 
                              onChange={(e)=>setProject({...pro,start_date:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            end_date
                          </Label>
                          <Col lg="10">
                            <Input
                              type="date"
                              name="end_date"
                              id="end_date"
                              className="form-control"
                              value={pro.end_date} 
                              onChange={(e)=>setProject({...pro,end_date:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            no_of_days
                          </Label>
                          <Col lg="10">
                            <Input
                              type="number"
                              name="no_of_days"
                              id="no_of_days"
                              className="form-control"
                              value={pro.url} 
                              onChange={(e)=>setProject({...pro,no_of_days:e.target.value})}
                            />
                          </Col>
                        </FormGroup><FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            status
                          </Label>
                          <Col lg="10">
                            <Input
                              type="text"
                              name="status"
                              id="status"
                              className="form-control"
                              value={pro.status} 
                              onChange={(e)=>setProject({...pro,status:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            estimated_price
                          </Label>
                          <Col lg="10">
                            <Input
                              name="estimated_price"
                              id="estimated_price"
                              className="form-control"
                              value={pro.estimated_price} 
                              onChange={(e)=>setProject({...pro,estimated_price:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            completed_by
                          </Label>
                          <Col lg="10">
                            <Input
                              type="text"
                              name="completed_by"
                              id="completed_by"
                              className="form-control"
                              value={pro.completed_by} 
                              onChange={(e)=>setProject({...pro,completed_by:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            added_by
                          </Label>
                          <Col lg="10">
                            <Input
                              type="text"
                              name="added_by"
                              id="added_by"
                              className="form-control"
                              value={pro.added_by} 
                              onChange={(e)=>setProject({...pro,added_by:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        
                          
                        
                        
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            status
                          </Label>
                          <Col lg="10">
                            <Input
                              name="status"
                              id="status"
                              className="form-control"
                              value={pro.status} 
                              onChange={(e)=>setProject({...pro,status:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          
                          <Col lg="2">
                            <Input
                              id="button"
                              name="Update"
                              type="submit"
                              className="btn btn-success"
                              onClick={handleEdit}
                            />
                          </Col>
                        </FormGroup>
                       
                      </div>
                    </div>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
      </div>
    </>
  )
}

export default EditDescription