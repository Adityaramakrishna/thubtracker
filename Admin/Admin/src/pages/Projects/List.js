import React from "react"
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "./datatables.scss"
import { useState,useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
const axiosAPI = axios.create()

const DatatableTables = () => {
  const [datas, setDatas] = useState([]);
  const[loading,setLoading]=useState(true);
  const [error, setError] = useState(null);


    useEffect(() => {
        axiosAPI.get('http://localhost:5001/getProjects')        
            .then(response => {
              console.log(response.data.projects)
              setDatas(response.data.projects)
            })
            .catch((err) =>{
              console.log(err)
              setError(err);
              setLoading(false);
            })
               
            
    }, []);
    const handleEdit = (id) => {
          console.log("Edit clicked for row:", id);
    };
    console.log(datas);
    if(loading){
      <p>Loading...</p>
    }
    if (error){
      return<p>Error:{error.message}</p>
    }
    if(!datas || datas.length===0){
      return<p>No data availble</p>
    }
    
   
    
  const data = {
    columns: [
      {
        label: "Project Name",
        field: "project_name",
        sort: "asc",
        width: 100,
      },
      {
        label: "Project Description",
        field: "project_description",
        sort: "asc",
        width: 100,
      },
      {
        label: "url",
        field: "url",
        sort: "asc",
        width:100,
      },
      {
        label: "Public ip",
        field: "public_ip",
        sort: "asc",
        width: 100,
      },
      {
        label: "Local ip",
        field: "local_ip",
        sort: "asc",
        width: 150,
      },
      {
        label: "Db name",
        field: "db_name",
        sort: "asc",
        width: 100,
      },
      {
        label: "Active status",
        field: "active_status",
        sort: "asc",
        width: 100,
      },
      {
        label: "maintaining by",
        field: "maintaining_by",
        sort: "asc",
        width: 100,
      },
      {
        label: "Department",
        field: "department",
        sort: "asc",
        width: 100,
      },  
      {
        label: "Git status",
        field: "git_status",
        sort: "asc",
        width: 100,
      }, 
      
      {
        label: "Git url",
        field: "git_url",
        sort: "asc",
        width: 100,
      },   
      {
        label: "Git Collabrators",
        field: "git_collabrators",
        sort: "asc",
        width: 100,
      },   
      {
        label: "Branch protection",
        field: "branch_protection",
        sort: "asc",
        width: 100,
      },   
      {
        label: "Added BY",
        field: "added_by",
        sort: "asc",
        width: 100,
      },   
      {
        label: "Updated By",
        field: "updated_by",
        sort: "asc",
        width: 200,
      },  
      {
        label: "Updated By",
        field: "updated_by",
        sort: "asc",
        width: 100,
      },  
      {
        label: "Created Date",
        field: "created_date",
        sort: "asc",
        width: 200,
      },  
      {
        label: "Updated Date",
        field: "updated_date",
        sort: "asc",
        width: 200,
      }, 
      {
        label: "Status",
        field: "status",
        sort: "asc",
        width: 100,
      },  
      {
        label: "Actions",
        field: "actions",
        sort: false,
        width: 150

      } ,
      {
        label: "Action",
        field: "Action",
        sort: false,
        width: 150

      },
      

    ],
    rows: datas.map((project) => ({
      ...project,
      actions: (
        <div>
          <Link to={`/Editprojects/${project._id}`}>
            <button className="btn btn-primary btn-sm mr-1">
              Edit
            </button>
          </Link>
          {/* Add a Link to Basic Elements */}
          
          
          
        </div>
      )
    }))
  };


  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="Projects" breadcrumbItem="List" />

       
       

        <Row>
          <Col className="col-12">
            <Card>
              <CardBody>
                <CardSubtitle className="mb-3"></CardSubtitle>
                <Link to="/basic-elements"><button className="btn btn-primary btn-sm mr-1">Add</button></Link>
                {/* <MDBDataTable responsive striped bordered data={data} /> */}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default DatatableTables
