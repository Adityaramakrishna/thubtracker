import React, { useState } from "react"


import { Card,CardBody,Col,Row,CardTitle,Label,Input,} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import Switch from "react-switch";

import axios from "axios";

const axiosAPI = axios.create()


const BasicElements = () => {
  // const [customchk, setcustomchk] = useState(true)
  // const [toggleSwitch, settoggleSwitch] = useState(true)
  const [switch8, setSwitch8] = useState(false);

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
    
    created_date:new Date().toLocaleString('en-US', {timeZone: 'Asia/Kolkata'}),
    
    status:switch8,
    })



    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(pro);
      console.log(switch8)
      let APP_URL = process.env.REACT_APP_DATABASEURL;
      axiosAPI.post(APP_URL+`addProjects`, pro)
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
    
  
  const handleChange =(event)=>{
    setProject({...pro,[event.target.name]:event.target.value})
  }
  const Offsymbol = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 12,
          color: "#fff",
          paddingRight: 2,
        }}
      >
        {" "}
        No
      </div>
    );
  };
  
  const OnSymbol = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 12,
          color: "#fff",
          paddingRight: 2,
        }}
      >
        {" "}
        Yes
      </div>
    );
  };
  return (
    <React.Fragment>
      <div className="page-content">

        <Breadcrumbs title="Form" breadcrumbItem="Form Elements" />

        <Row>
          <Col>
            <Card>
              <CardBody>
                <CardTitle className="h4"><b>BUILD DATATABLE</b></CardTitle>
                

                <Row className="mb-3">
                  <label
                    htmlFor="example-text-input"
                    className="col-md-2 col-form-label"
                    
                    
                  >
                   <b>Project Name:</b>
                    </label>
                  <div className="col-md-10">
                    <input
                    onChange={handleChange}
                      className="form-control"
                      type="text"
                      name="project_name"
                      placeholder=" Enter Project Name"
                    />
                  </div>
                </Row>
                
                <Row className="mb-3">
                  <label
                    htmlFor="example-email-input"
                    className="col-md-2 col-form-label"
                  >
                   <b>Project Description:</b>
                    </label>
                  <div className="col-md-10">
                    <input
                    onChange={handleChange}
                      className="form-control"
                      type="text"
                      name="project_description"
                      placeholder="Enter description Name"
                      
                    />
                  </div>
                </Row>
                <Row className="mb-3">
                  <label
                    htmlFor="example-url-input"
                    className="col-md-2 col-form-label"
                  >
                    <b>URL:</b>
                    </label>
                  <div className="col-md-10">
                    <input
                    onChange={handleChange}
                      className="form-control"
                      type="url"
                      name="url"
                      placeholder=" Enter url "
                      
                      
                    />
                  </div>
                </Row>
                <Row className="mb-3">
                  <label
                    htmlFor="example-tel-input"
                    className="col-md-2 col-form-label"
                  >
                   <b>Public IP:</b>
                    </label>
                  <div className="col-md-10">
                    <input
                    onChange={handleChange}
                      className="form-control"
                      type="text"
                      name="public_ip"
                      placeholder="Enter Public Ip "
                      
                      
                    />
                  </div>
                </Row>
                <Row className="mb-3">
                  <label
                    htmlFor="example-password-input"
                    className="col-md-2 col-form-label"
                  >
                   <b> Local Ip:</b>
                    </label>
                  <div className="col-md-10">
                    <input
                    onChange={handleChange}
                      className="form-control"
                      type="text"
                      name="local_ip"
                      placeholder="Enter Local Ip"
                      
                    />
                  </div>
                </Row>
                <Row className="mb-3">
                  <label
                    htmlFor="example-number-input"
                    className="col-md-2 col-form-label"
                  >
                    <b>DB name :</b>
                    </label>
                  <div className="col-md-10">
                    <input
                    onChange={handleChange}
                      className="form-control"
                      type="text"
                      name="db_name"
                      placeholder="Enter DB Name"
                      
                      id="example-number-input"
                    />
                  </div>
                </Row>
                <Row className="mb-3">
                  <label className="col-md-2 col-form-label"><b>Git Status</b></label>
                  <div className="col-md-10">
                    <select className="form-control" onChange={handleChange} name="git_status">
                    
                      <option>select</option>
                      <option>yes</option>
                      <option>no</option>
                    </select>
                  </div>
                </Row>
                
                <Row className="mb-3">
                  <label className="col-md-2 col-form-label"><b>Active Status</b></label>
                  <div className="col-md-10">
                    <select className="form-control" onChange={handleChange} name="active_status">
                    
                      <option>select</option>
                      <option>YES</option>
                      <option>No</option>
                      
                      
                    </select>
                  </div>
                </Row>
                <Row className="mb-3">
                  <label
                    htmlFor="example-text-input"
                    className="col-md-2 col-form-label"
                  >
                    <b>Department</b>
                    </label>
                  <div className="col-md-10">
                    <input
                    onChange={handleChange}
                      className="form-control"
                      type="text"
                      name="department"
                      placeholder="Enter Department"
                    />
                  </div>
                </Row>
                <Row className="mb-3">
                  <label className="col-md-2 col-form-label"><b>maintaining_by</b></label>
                  <div className="col-md-10">
                    <select className="form-control" onChange={handleChange} name="maintaining_by">
                    
                      <option>select</option>
                      <option>yes</option>
                      <option>no</option>
                    </select>
                  </div>
                </Row>
                <Row className="mb-3">
                  <label
                    htmlFor="example-url-input"
                    className="col-md-2 col-form-label"
                  >
                    <b>Git Url</b>
                    </label>
                  <div className="col-md-10">
                    <input
                    onChange={handleChange}
                      className="form-control"
                      type="url"
                      name="git_url"
                      placeholder="Enter Git Url"
                    />
                  </div>
                 

                </Row>
                <Row className="mb-3">
                  <label className="col-md-2 col-form-label"><b>Git Collabrators</b></label>
                  <div className="col-md-10">
                    <select className="form-control" onChange={handleChange} name="git_collabrators">
                    
                      <option>select</option>
                      <option>Simhadri</option>
                      <option>ndp</option>
                      <option>jdp</option>
                      <option>dsp</option>
                      <option>prasanth</option>
                      <option>divya</option>
                      
                    </select>
                  </div>
                </Row>
                <Row className="mb-3">
                  <label
                    htmlFor="example-text-input"
                    className="col-md-2 col-form-label"
                    placeholder="Enter Git Collabrators"
                  >
                    <b>Branch Protection</b>
                  
                    </label>
                  <div className="col-md-10">
                    <input
                    onChange={handleChange}
                      className="form-control"
                      type="text"
                      name="branch_protection"
                      placeholder="Branch Protection"
                    />
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
                <Row className="mb-3">
                  <label className="col-md-2 col-form-label">
                    <b>Status:</b>
                  </label>
                  <div className="col-md-10">
                    <Switch
                      uncheckedIcon={<Offsymbol />}
                      checkedIcon={<OnSymbol />}
                      onColor="#ec4561"
                      className="form-label"
                      onChange={(checked) => {
                        setSwitch8(checked);
                        pro.status=checked
                      }}
                      checked={switch8}
                    />
                  </div>
                </Row>

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
