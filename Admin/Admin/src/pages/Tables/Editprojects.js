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
const Editform = () => {
  const inpRow = [{ name: "", file: "" }]

  const { projectid } = useParams();
  const [pro,setProject]=useState({
    project_name:"",
    project_description:"",
    url:"",
    public_ip:"",
    local_ip:"",
    db_name:"",
    active_status:"",
    maintaining_by:"",
    department:"",
    git_status:"",
    git_url:"",
    git_collabrators:"",
    branch_protection:"",
    added_by:"",
    updated_by:"",
    created_date:new Date().toLocaleString('en-US', {timeZone: 'Asia/Kolkata'}),
    updated_date:"",
    status:1,
    })
const api=APP_URL+'addeventform';
// const {id} = useParams()
const id = window.location.pathname.split('/')[2];
// console.log(pathname)
    useEffect(()=>{
      console.log("sss")
      console.log(id)
    //  axiosAPI.get('http://localhost:5001/getProjectsbyid/'+id)
      axiosAPI.get(APP_URL+`getProjectsbyid/`+id)
        .then((res)=>{console.log(res.data)
        setProject(res.data.eventdata)}
        )
        .catch((err)=>console.log(err))
    },[])
    const handleEdit=(e)=>{
        e.preventDefault();
        console.log(pro)
        //http://localhost:3000/form
        axiosAPI.put('http://localhost:5001/updateProjects/'+id,{pro})
        .then((result)=>
        {
            alert("Updated successfully.")
            window.location.href='/DatatableTables';

        })
    }

return (
    <>
      <div className="page-content">
        
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Tasks" breadcrumbItem="Create Task" />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Add Event</CardTitle>
                  <form className="outer-repeater" onSubmit={handleEdit}>
                    <div data-repeater-list="outer-group" className="outer">
                      <div data-repeater-item className="outer">
                        <FormGroup className="mb-4" row >
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                           project name
                          </Label>
                          <Col lg="10">
                            <Input
                              id="project_name"
                              name="project_name"
                              type="text"
                              className="form-control"
                              placeholder="Enter project_name..."
                              value={pro.project_name} 
                              onChange={(e)=>setProject({...pro,project_name:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                           project description
                          </Label>
                          <Col lg="10">
                            <Input
                              id="project_description"
                              name="project_description"
                              type="text"
                              className="form-control"
                              placeholder="Enter project_description..."
                              value={pro.project_description} 
                              onChange={(e)=>setProject({...pro,project_description:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            url
                          </Label>
                          <Col lg="10">
                            <Input
                              type="url"
                              name="url"
                              id="url"
                              className="form-control"
                              value={pro.url} 
                              onChange={(e)=>setProject({...pro,url:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            public ip
                          </Label>
                          <Col lg="10">
                            <Input
                              type="text"
                              name="public_ip"
                              id="public_ip"
                              className="form-control"
                              value={pro.public_ip} 
                              onChange={(e)=>setProject({...pro,public_ip:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            local ip
                          </Label>
                          <Col lg="10">
                            <Input
                              type="text"
                              name="local_ip"
                              id="local_ip"
                              className="form-control"
                              value={pro.local_ip} 
                              onChange={(e)=>setProject({...pro,local_ip:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            db name
                          </Label>
                          <Col lg="10">
                            <Input
                              type="text"
                              name="db_name"
                              id="db_name"
                              className="form-control"
                              value={pro.Noofparticipants} 
                              onChange={(e)=setProject({...pro,db_name:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            active status
                          </Label>
                          <Col lg="10">
                            <Input
                              type="text"
                              name="active_status"
                              id="active_status"
                              className="form-control"
                              value={pro.active_status} 
                              onChange={(e)=>setProject({...pro,active_status:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            maintaining by
                          </Label>
                          <Col lg="10">
                            <Input
                              type="text"
                              name="maintaining_byurl"
                              id="maintaining_byurl"
                              className="form-control"
                              value={pro.url} 
                              onChange={(e)=>setProject({...pro,maintaining_by:e.target.value})}
                            />
                          </Col>
                        </FormGroup><FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            department
                          </Label>
                          <Col lg="10">
                            <Input
                              type="text"
                              name="department"
                              id="department"
                              className="form-control"
                              value={pro.department} 
                              onChange={(e)=>setProject({...pro,department:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            git status
                          </Label>
                          <Col lg="10">
                            <Input
                              name="git_status"
                              id="git_status"
                              className="form-control"
                              value={pro.git_status} 
                              onChange={(e)=>setProject({...pro,git_status:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            git url
                          </Label>
                          <Col lg="10">
                            <Input
                              type="url"
                              name="git_url"
                              id="git_url"
                              className="form-control"
                              value={pro.git_url} 
                              onChange={(e)=>setProject({...pro,git_url:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            git collabrators
                          </Label>
                          <Col lg="10">
                            <Input
                              type="text"
                              name="git_collabrators"
                              id="git_collabrators"
                              className="form-control"
                              value={pro.git_collabrators} 
                              onChange={(e)=>setProject({...pro,git_collabrators:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            branch protection
                          </Label>
                          <Col lg="10">
                            <Input
                              type="text"
                              name="branch_protection"
                              id="branch_protection"
                              className="form-control"
                              value={pro.branch_protection} 
                              onChange={(e)=>setProject({...pro,branch_protection:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            added by
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
                            updated by
                          </Label>
                          <Col lg="10">
                            <Input
                              type="updated_by"
                              name="updated_by"
                              id="updated_by"
                              className="form-control"
                              value={pro.updated_by} 
                              onChange={(e)=>setProject({...pro,updated_by:e.target.value})}
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
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            submit
                          </Label>
                          <Col lg="10">
                            <Input
                              id="button"
                              name="submit"
                              type="submit"
                              className="form-control"
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

export default Editform