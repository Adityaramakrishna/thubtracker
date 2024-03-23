import React from "react"
import { Row, Col, CardBody, Card, Progress } from "reactstrap"
import { Link } from "react-router-dom"

//Import Components
import LineChart from "./line-chart"
import RevenueChart from "./revenue-chart"
import SalesAnalytics from "./sales-analytics"
import ScatterChart from "./scatter-analytics"
import LatestTransaction from "./latest-transaction"
import Doughnut from "../AllCharts/echart/doughnutchart"

import { useState,useEffect } from "react"
import axios from "axios"
//Import Image
import widgetImage from "../../assets/images/widget-img.png"
import Overview from "./Overview";
import Inbox  from './Inbox';
const axiosAPI = new axios.create();


const Dashboard = () => {
  
    const [totalEstimation, setTotalEstimation] = useState(0);

    useEffect(() => {
        const fetchTotalEstimation = async () => {
            try {
                const response = await axiosAPI.get(process.env.REACT_APP_DATABASEURL + 'getDescriptions');
                const descriptions = response.data.descriptions;
                const total = descriptions.reduce((acc, curr) => acc + parseFloat(curr.estimated_price || 0), 0);
                setTotalEstimation(total);
            } catch (error) {
                console.error('Error fetching total estimation:', error);
            }
        };

        fetchTotalEstimation();
    }, []);


  return (
    <React.Fragment>
      <div className="page-content">
  
        <Row>
          <div className="col-12">
            <div className="page-title-box d-flex align-items-center justify-content-between">
              <h4 className="page-title mb-0 font-size-18">Dashboard</h4>

              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item active">Welcome to Application Development Tracker</li>
                </ol>
              </div>

            </div>
          </div>
        </Row>

        <Row>
          <Col lg={6}>
            
            <Card>
              <CardBody>
               
                 
                
                <Row >
                  <Col lg={12}>
                    <Card>
                      <CardBody>
                        <h4>Total Estimation: ₹{totalEstimation.toFixed(2)}</h4>
                        <div>
                          <Progress
                            value="50"
                            color="primary"
                            className="bg-transparent progress-sm"
                            size="sm"
                          /></div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          
          
        </Row>
        
        

        <Row>
          <Card>
            <CardBody>
              <Doughnut />
            </CardBody>
          </Card>
        </Row>
        <Row>
          <Col lg={12}>
            <CardBody>

              <LineChart />
            </CardBody>

          </Col>
        </Row>

      </div>
    </React.Fragment>
  )
}

export default Dashboard