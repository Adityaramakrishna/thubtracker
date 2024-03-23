import React from "react";
import { MDBDataTable } from "mdbreact";
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "./datatables.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const axiosAPI = axios.create();

const DatatableTables = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axiosAPI.get('http://localhost:5001/getProjects')        
      .then(response => {
        console.log(response.data.projects);
        setDatas(response.data.projects);
      })
      .catch(err => console.log(err));
  }, []);

  const handleEdit = (id) => {
    console.log("Edit clicked for row:", id);
  };

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
        label: "Url",
        field: "url",
        sort: "asc",
        width: 100,
      },
      {
        label: "Public IP",
        field: "public_ip",
        sort: "asc",
        width: 100,
      },
      {
        label: "Local IP",
        field: "local_ip",
        sort: "asc",
        width: 100,
      },
      {
        label: "DB Name",
        field: "db_name",
        sort: "asc",
        width: 100,
      },
      {
        label: "Active Status",
        field: "active_status",
        sort: "asc",
        width: 100,
      },
      {
        label: "Maintaining By",
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
        label: "Git Status",
        field: "git_status",
        sort: "asc",
        width: 100,
      },
      {
        label: "Git URL",
        field: "git_url",
        sort: "asc",
        width: 100,
      },
      {
        label: "Git Collaborators",
        field: "git_collaborators",
        sort: "asc",
        width: 100,
      },
      {
        label: "Branch Protection",
        field: "branch_protection",
        sort: "asc",
        width: 100,
      },
      {
        label: "Added By",
        field: "added_by",
        sort: "asc",
        width: 100,
      },
      // {
      //   label: "Updated By",
      //   field: "updated_by",
      //   sort: "asc",
      //   width: 100,
      // },
      {
        label: "Created Date",
        field: "created_date",
        sort: "asc",
        width: 100,
      },
      {
        label: "Updated Date",
        field: "updated_date",
        sort: "asc",
        width: 100,
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
      }
    ],
    rows: datas.map((project) => ({
      ...project,
      actions: (
        <div>
          <Link to={`/Editprojects/${project._id}`}>
            <button className="btn btn-primary btn-sm mr-1">Edit</button>
          </Link>
        </div>
      )
    }))
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="Tables" breadcrumbItem="Data Tables" />
        <Row>
          <Col className="col-12">
            <Card>
              <CardBody>
                <CardTitle></CardTitle>
                <CardSubtitle className="mb-3"></CardSubtitle>
                <Link to="/basic-elements">
                  <button className="btn btn-primary btn-sm mr-1">Add</button>
                </Link>
                <MDBDataTable responsive striped bordered data={data}/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default DatatableTables;
