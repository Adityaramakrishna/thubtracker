import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactApexChart from "react-apexcharts";

const axiosAPI = new axios.create();
let APP_URL = process.env.REACT_APP_DATABASEURL;

const PieChart = () => {
  const [workData, setWorkData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [workComplexityCounts, setWorkComplexityCounts] = useState([]);

  useEffect(() => {
    //axiosAPI.get("http://localhost:5001/getDescriptions")
    axiosAPI.get(APP_URL+`getDescriptions`)
      .then((response) => {
        setWorkData(response.data.descriptions);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (workData && workData.length > 0) {
      const countsObject = workData.reduce((acc, item) => {
        const Completedby = item.completed_by;
        acc[Completedby] = (acc[Completedby] || 0) + 1;
        return acc;
      }, {});

      const countsArray = Object.entries(countsObject).map(([Completedby, count]) => ({
        completed_by: Completedby,
        count: count
      }));
      
      setWorkComplexityCounts(countsArray);
    }
  }, [workData]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!workData || workData.length === 0) {
    return <p>No data available</p>;
  }

  const options = {
    chart: {
      type: "bar",
    },
    xaxis: {
      categories: workComplexityCounts.map((item) => item.completed_by),
    },
  };

  const series = [{
    name: 'Count',
    data: workComplexityCounts.map((item) => item.count),
  }];

  return (
    <div>
      <h4>Projects Completed By</h4>
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default PieChart;
