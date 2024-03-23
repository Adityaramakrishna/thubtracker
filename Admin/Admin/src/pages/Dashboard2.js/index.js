import React, { useState, useEffect } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import SalesReport from './SalesReport';
import EmailSent from './EmailSent';
import MiniWidget from './MiniWidget';
import EarningChart from './EarningChart';
import YearlySale from './YearlySale';
import ActivityComp from './ActivityComp';
import PopularProduct from './PopularProduct';
import SocialSource from './SocialSource';
const axiosAPI = axios.create();


const options = {
    plotOptions: {
        radialBar: {
            offsetY: -12,
            hollow: {
                margin: 5,
                size: '60%',
                background: 'rgba(59, 93, 231, .25)',
            },
            dataLabels: {
                name: {
                    show: false,
                },
                value: {
                    show: true,
                    fontSize: '12px',
                    offsetY: 5,
                },
                style: {
                    colors: ['#fff'],
                },
            },
        },
    },
    colors: ['#3b5de7'],
};

const options1 = {
    plotOptions: {
        radialBar: {
            offsetY: -12,
            hollow: {
                margin: 5,
                size: '60%',
                background: 'rgba(69, 203, 133, .25)',
            },
            dataLabels: {
                name: {
                    show: false,
                },
                value: {
                    show: true,
                    fontSize: '12px',
                    offsetY: 5,
                },
                style: {
                    colors: ['#fff'],
                },
            },
        },
    },
    colors: ['#45CB85'],
};

const Dashboard2 = () => {
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
                <Breadcrumbs title="Dashboard" breadcrumbItem="Dashboard 2" />
                <Row>
                    <Col lg={6}>
                        <Row>
                        <Row>
                    <Col lg={12}>
                        <Card>
                            <CardBody>
                                <h4>Total Estimation: ₹{totalEstimation.toFixed(2)}</h4>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                        </Row>
                    </Col>
                    <EmailSent />
                </Row>
                <Row>
                    <Col xl={3}>
                        <MiniWidget />
                    </Col>
                    <Col xl={6}>
                        <EarningChart />
                    </Col>
                    <Col xl={3}>
                        <YearlySale />
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <ActivityComp />
                    </Col>
                    <Col lg={4}>
                        <PopularProduct />
                    </Col>
                    <Col lg={4}>
                        <SocialSource />
                    </Col>
                </Row>
                
            </div>
        </React.Fragment>
    );
};

export default Dashboard2;
