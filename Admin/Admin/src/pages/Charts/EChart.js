import React from "react"
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

// Charts
import Gauge from "../AllCharts/echart/gaugechart"
import Line from "../AllCharts/echart/linechart"
import LineBar from "../AllCharts/echart/linebarchart"
import Doughnut from "../AllCharts/echart/doughnutchart"
import Pie from "../AllCharts/echart/piechart"
import Scatter from "../AllCharts/echart/scatterchart"
import Bubble from "../AllCharts/echart/bubblechart"
import Candlestick from "../AllCharts/echart/candlestickchart"
import LineChart from "../Dashboard/line-chart"
import DountChart from "../AllCharts/chartjs/dountchart"

const EChart = () => {
  return (
    <React.Fragment>
      <div className="page-content">
       
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Charts" breadcrumbItem="E-Charts" />
         
          <Row>
            
             <Col lg="6">
              <Card>
                <CardBody>
                  <CardTitle></CardTitle>
                  <div id="pie-chart" className="e-chart">
                    <Pie />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" >
              <Card>
                <CardBody>
                  <CardTitle></CardTitle>
                  <div id="pie-chart" className="e-chart">
                    <LineChart />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row> 
          <Row>
          <Col lg="6">
              <Card>
                <CardBody>
                  <CardTitle></CardTitle>
                  <div id="pie-chart" className="e-chart">
                    <DountChart />
                  </div>
                </CardBody>
              </Card>
            </Col>
            
          <Col lg="6">
              <Card>
                <CardBody>
                  <CardTitle></CardTitle>
                  <div id="pie-chart" className="e-chart">
                    <Doughnut  />
                  </div>
                </CardBody>
              </Card>
            </Col>

          

          </Row>
          
          
      </div>
    </React.Fragment>
  )
}

export default EChart
