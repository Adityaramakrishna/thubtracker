
import React, { useState,useEffect } from "react"



import {
  Card,
  CardBody,
  Col,
  Row,
  CardTitle,
  Label,
  Input,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import axios from "axios";

const axiosAPI = axios.create()


const BasicElements = () => {
  // const [customchk, setcustomchk] = useState(true)
  // const [toggleSwitch, settoggleSwitch] = useState(true)
  

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
    let APP_URL = process.env.REACT_APP_DATABASEURL;
    const [datas, setDatas] = useState([]);
    const [projectTitles, setProjectTitles] = useState([]);
    useEffect(() => {
      axiosAPI.get(APP_URL+`getProjects`)
        .then(response => {
          console.log(response.data.projects);
          setDatas(response.data.projects);
          const titles = response.data.projects.map(project => project.project_name);
          setProjectTitles(titles);
        })
        .catch(err => console.log(err));
    }, []);
  



    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(pro);
      
      axiosAPI.post(APP_URL+`addDescriptions`, pro)
        .then((res) => {
          alert("Added Data Succeesfully")
          
          console.log("Response:", res.data);
          // Add any additional handling of the response here
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
          // Handle the error appropriately, such as displaying an error message to the user
        });
    };
    
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setProject({ ...pro, [name]: value });
      
      // Update selected "Type of Work"
      if (name === "type_of_work") {
        setSelectedTypeOfWork(value);
      }
    };
  const [selectedTypeOfWork, setSelectedTypeOfWork] = useState(""); // State to store selected "Type of Work"
  const handleEndDateChange = (event) => {
    setProject({ ...pro, end_date: event.target.value });
    // Update the no_of_days based on start_date and end_date
    updateNoOfDays(pro.start_date, event.target.value);
  };

  const updateNoOfDays = (startDate, endDate) => {
    // Calculate the difference in days between start_date and end_date
    const diffInDays = Math.floor((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));
    // Update the no_of_days state
    setProject({ ...pro, no_of_days: diffInDays });
  };
 
  
  

  return (
    <React.Fragment>
      <div className="page-content">

        <Breadcrumbs title="Form" breadcrumbItem="Form Elements" />

        <Row>
          <Col>
            <Card>
              <CardBody>
                <CardTitle className="h4"><b>Project Description Fields</b></CardTitle>
                

                <Row className="mb-3">
                  <label className="col-md-2 col-form-label"><b>Project Title</b></label>
                  <div className="col-md-10">
                  <select className="form-control" onChange={handleChange} name="project_title" value={pro.project_title}>
                      <option value="">Select</option>
                      {projectTitles.map((title, index) => (
                        <option key={index} value={title}>{title}</option>
                      ))}
                    </select>
                  </div>
                </Row>
                
                <Row className="mb-3">
                  <label className="col-md-2 col-form-label"><b>Type Of Work</b></label>
                  <div className="col-md-10">
                    {/* Dropdown for Type of Work */}
                    <select className="form-control" onChange={handleChange} name="type_of_work">
                      <option value="">select</option>
                      <option value="New Module">New Module</option>
                      <option value="Enhancement">Enhancement</option>
                      <option value="Bug Fixing">Bug Fixing</option>
                    </select>
                  </div>
                  
                  </Row>
                  {/* {selectedTypeOfWork && (
                  <Row className="mb-3">
                    <label className="col-md-2 col-form-label"><b>Selected Type of Work:</b></label>
                    <div className="col-md-10">
                      <p>{selectedTypeOfWork}</p>
                    </div>
                  </Row> */}
                {/* )} */}
                  
                  <Row className="mb-3">
                  <label htmlFor="example-url-input" className="col-md-2 col-form-label"><b>{selectedTypeOfWork} Description</b></label>
                  <div className="col-md-10">
                    <textarea
                      onChange={handleChange}
                      className="form-control"
                      name="description"
                      placeholder="Enter Description"
                    />
                  </div>
                </Row>
                
                <Row className="mb-3">
                  <label className="col-md-2 col-form-label"><b>Work Complexity</b></label>
                  <div className="col-md-10">
                    <select className="form-control" onChange={handleChange} name="work_complexity">
                    
                      <option>select</option>
                      <option>Easy</option>
                      <option>Moderate Complexity</option>
                      <option>Highly Complexity</option>
                      
                      
                    </select>
                  </div>
                </Row>
                 
                <Row className="mb-3">
                  <label
                    htmlFor="example-tel-input"
                    className="col-md-2 col-form-label"
                  >
                   <b>Assigned By</b>
                    </label>
                  <div className="col-md-10">
                    <input
                    onChange={handleChange}
                      className="form-control"
                      type="text"
                      name="assigned_by"
                      placeholder="Enter Assigned By "
                      
                      
                    />
                  </div>
                </Row>
                <Row className="mb-3">
                  <label
                    htmlFor="example-password-input"
                    className="col-md-2 col-form-label"
                  >
                   <b> Start Date:</b>
                    </label>
                  <div className="col-md-10">
                    <input
                    onChange={handleChange}
                      className="form-control"
                      type="datetime-local"
                      name="start_date"
                      placeholder="Enter Start Date"
                      
                    />
                    
                  </div>
                </Row>
                <Row className="mb-3">
                  <label
                    htmlFor="example-password-input"
                    className="col-md-2 col-form-label"
                  >
                   <b> End Date:</b>
                    </label>
                  <div className="col-md-10">
                    <input
                    onChange={handleChange}
                    
                      className="form-control"
                      type="datetime-local"
                      name="end_date"
                      placeholder="Enter end date"
                      
                    />
                  </div>
                </Row>
                <Row className="mb-3">
                  <label
                    htmlFor="example-number-input"
                    className="col-md-2 col-form-label"
                  >
                    <b>No Of Days :</b>
                    </label>
                  <div className="col-md-10">
                    <input
                    onChange={handleChange}
                      className="form-control"
                      type="number"
                      name="no_of_days"
                      placeholder="Enter No Of Days"
                      value={pro.no_of_days}
                      
                      id="example-number-input"
                    />
                  </div>
                </Row>
                <Row className="mb-3">
                  <label className="col-md-2 col-form-label"><b>Status :</b></label>
                  <div className="col-md-10">
                    <select className="form-control" onChange={handleChange} name="status">
                    
                      <option>select</option>
                      <option>Not Yet Started</option>
                      <option>Pending</option>
                      <option>Completed</option>
                    </select>
                  </div>
                </Row>
                <Row className="mb-3">
                  <label
                    htmlFor="example-text-input"
                    className="col-md-2 col-form-label"
                  >
                    <b>Estimated Price</b>
                    </label>
                  <div className="col-md-10">
                    <input
                    onChange={handleChange}
                      className="form-control"
                      type="number"
                      name="estimated_price"
                      placeholder="Enter Estimated Price"
                    />
                  </div>
                </Row>
                
                <Row className="mb-3">
                  <label className="col-md-2 col-form-label"><b>Completed By</b></label>
                  <div className="col-md-10">
                    <select className="form-control" onChange={handleChange} name="completed_by">
                    
                      <option>select</option>
                      <option>Simhadri</option>
                      <option>ndp</option>
                      <option>jdp</option>
                      
                      
                    </select>
                  </div>
                </Row>
            
                
                
                {/* <Row className="mb-3">
                  <label
                    htmlFor="example-email-input"
                    className="col-md-2 col-form-label"
                  >
                    <b>Updated By</b>
                    </label>
                  <div className="col-md-10">
                    <input
                    onChange={handleChange}
                      className="form-control"
                      type="text"
                      name="updated_by"
                      placeholder="Updated By"
                    />
                  </div>
                </Row> */}
                <Row className="mb-3">
                  <label
                    htmlFor="example-email-input"
                    className="col-md-2 col-form-label"
                  >
                    <b>Added By</b>
                    </label>
                  <div className="col-md-10">
                    <input
                    onChange={handleChange}
                      className="form-control"
                      type="text"
                      name="added_by"
                      placeholder="Enter Added By"
                    />
                  </div>
                </Row>
                {/* <Row className="mb-3">
                  <label className="col-md-2 col-form-label"><b>Status</b></label>
                  <div className="col-md-10">
                    <select className="form-control" onChange={handleChange} name="status">
                      <option value={""}>select</option>
                      <option value={1}>in_use</option>
                      <option value={0}>not_in_use</option>
                    </select>
                  </div>
                </Row> */}

                

                <Row className="App" lg="5">
                  <input type="submit" value="submit"  className="btn btn-success"onClick={handleSubmit}></input>
                </Row>

                
                
              </CardBody>
            </Card>
          </Col>
        </Row>



      </div>
    </React.Fragment>
  )
}

export default BasicElements

