import React from "react";
import Chart from "react-apexcharts";

const ChartComponent = () => {
  // Chart data and options
  const chartOptions = {
    chart: {
      type: "line", // You can change this to 'bar', 'pie', etc.
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","July","Aug","Sep","Oct","Nov","Dec"],
    },
    stroke: {
      curve: "smooth",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#00E396"],
  };

  const chartSeries = [
    {
      name: "Sales",
      data: [10, 50, 30, 80, 40, 90, 80, 85, 70, 65, 70, 80], // Sample data
    },
  ];

  return (
    <div className="chart-container">
      <h2>Sales Chart</h2>
      <Chart options={chartOptions} series={chartSeries} type="line" height={350} />
    </div>
  );
};


export default ChartComponent;
