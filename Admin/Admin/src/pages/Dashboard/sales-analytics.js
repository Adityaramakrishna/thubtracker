import React, { Component } from "react"
import { Row, Col, Card, CardBody } from "reactstrap"
import ReactApexChart from "react-apexcharts"

class SalesAnalytics extends Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [38, 26, 14],
      options: {
        labels: ["Online", "Offline", "Marketing"],
        plotOptions: {
          pie: {
            donut: {
              size: '75%'
            }
          }
        },
        legend: {
          show: false,
        },
        colors: ['#3b5de7', '#45cb85', '#eeb902'],
      },
    }
  }
  render() {
    return (
      <React.Fragment>
        <Card>
          {/* <CardBody> */}
             <Row className="align-items-center">
              
              <Col sm={6}>
                <div>
                  <Row>
                    
                  </Row>
                </div>
              </Col>
            </Row>
          {/* </CardBody> */}
        </Card>
      </React.Fragment>
    )
  }
}

export default SalesAnalytics
