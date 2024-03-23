// import React from "react"

// import { Row, Col, Card, CardBody, CardTitle,  } from "reactstrap"
// // Editable
// import BootstrapTable from "react-bootstrap-table-next"
// import cellEditFactory, { Type } from "react-bootstrap-table2-editor"
// import { useState,useEffect } from "react"
// import { useParams } from "react-router-dom/cjs/react-router-dom.min"


// //Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb"
// import axios from "axios"
// const axiosAPI = axios.create()

  
//   const EditableTables = () => {
//     const [data1, setData1] = useState([]);
//     const { id } = useParams();
//     useEffect(() => {
//       fetchData();
//     }, []);

//   useEffect(() => {
//     const fetchData = () => {
//       axiosAPI.get("http://localhost:5001/getProjects")
//         .then((response) => {
//           setData1(response.data.projects);
//         })
//         .catch((err) => console.log(err));
//     };
//     fetchData();

//   }, []);
//   const fetchData = () => {
//     axiosAPI.get(`http://localhost:5001/getProjects`)
//       .then((response) => {
//         setData1(response.data.projects);
//       })
//       .catch((err) => console.log(err));
//   };
//   const handleEditClick = (oldValue, newValue, row, column) => {
//     const updatedData = [...data1];
//     const rowIndex = updatedData.findIndex(item => item.id === row.id);
//     updatedData[rowIndex][column.dataField] = newValue;
//     setData1(updatedData);

  
//     axiosAPI.put(`http://localhost:5001/updateProject/${row.id}`, row)
//     .then((response) => {
//       console.log("Data updated successfully:", response.data);
//     })
//     .catch((error) => {
//       console.error("Error updating data:", error);
//     });
// };

   
    
   
//   const columns=[
//       {
//         dataField: "project_name",
//         text: "project Name",
//       },
//       {
//         dataField: "project_description",
//         text: "project Description",
        
//       },
//       {
//         text: "Url",
//         dataField: "url",
        
        
//       },
//       {
//         text: "Public ip",
//         dataField: "public_ip",
        
//       },
//       {
//         text: "Local ip",
//         dataField: "local_ip",
        
//       },
//       {
//         text: "Db name",
//         dataField: "db_name",
        
//       },
//       {
//         text: "Active status",
//         dataField: "active_status",
        
//       },
//       {
//         text: "maintaining by",
//         dataField: "maintaining_by",
        
//       },
//       {
//         text: "Department",
//         dataField: "department",
        
//       },  
//       {
//         text: "Git status",
//         dataField: "git_status",
        
        
//       }, 
      
//       {
//         text: "Git url",
//         field:"git_url",
       
        
//       },   
//       {
//         text:"Git Collabrators",
//         dataField:"git_collabrators",
        
        
//       },   
//       {
//         text:"Branch protection",
//         dataField:"branch_protection",
        
        
//       },   
//       {
//         text:"Added BY",
//         dataField:"added_by",
        
        
//       },   
//       {
//         text:"Updated By",
//         dataField:"updated_by",
      
        
//       },  
//       {
//         text:"Updated By",
//         dataField:"updated_by",
        
        
//       },  
//       {
//         text:"Created Date",
//         dataField:"created_date",
        
        
//       },  
//       {
//         text:"Updated Date",
//         dataField:"updated_date",
        
        
//       }, 
//       {
//         text:"Status",
//         dataField:"status",
        
        
//       },
      

//     ]
  
//   return (
//     <React.Fragment>
//       <div className="page-content">

//         <Breadcrumbs title="Tables" breadcrumbItem="Editable Table" />

//         <Row>
//           <Col>
//             <Card>
//               <CardBody>
//                 <CardTitle className="h4">Datatable Editable </CardTitle>
//                 <p className="card-title-desc">Table Edits is a lightweight jQuery plugin for making table rows editable.</p>

//                 <div className="table-responsive">
//                   <BootstrapTable
//                     keyField="id"
//                     data={data1}
//                     columns={columns}
//                     cellEdit={cellEditFactory({ mode: "click",blurToSave: true,
//                     afterSaveCell: handleEditClick
//                   })}
//                   />
//                 </div>
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </div>

//     </React.Fragment>
//   )
// }

// export default EditableTables





