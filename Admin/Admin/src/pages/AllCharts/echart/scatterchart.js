// // import React, { useState, useEffect } from "react";
// import axios from "axios";
// import ReactApexChart from "react-apexcharts";
// import { useState,useEffect } from "react";

// const PieChart = () => {
//   const [workData, setWorkData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [statusCounts, setStatusCounts] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5001/getDescriptions")
//       .then((response) => {
//         setWorkData(response.data.descriptions);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err);
//         setLoading(false);
//       });
//   }, []);

//   useEffect(() => {
//     if (workData && workData.length > 0) {
//       const countsObject = workData.reduce((acc, item) => {
//         const status = item.status;
//         acc[status] = (acc[status] || 0) + 1;
//         return acc;
//       }, {});

//       const countsArray = Object.entries(countsObject).map(([status, count]) => ({
//         status,
//         count
//       }));

//       setStatusCounts(countsArray);
//     }
//   }, [workData]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   if (!workData || workData.length === 0) {
//     return <p>No data available</p>;
//   }

//   const series = statusCounts.map((item) => item.count);
//   const options = {
//     chart: {
//       type: 'pie',
//     },  
//     labels: statusCounts.map((item) => item.status),
//   };

//   return (
//     <div>
//       <h1>Status Pie Chart</h1>
//       <ReactApexChart
//         options={options}
//         series={series}
//         type="pie"
//         height={350}
//       />
//     </div>
//   );
// };

// export default PieChart;

