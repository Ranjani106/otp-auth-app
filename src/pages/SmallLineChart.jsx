import React from "react";
import Chart from "react-apexcharts";

const SmallLineChart = () => {
  const options = {
    chart: {
      type: "line",
      toolbar: { show: false }, // Hide toolbar
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May"],
      labels: { show: true },
    },
    yaxis: { labels: { show: true } },
    stroke: {
      curve: "smooth",
      width: 2,
      colors: ["#fbbc05"],
    },
    tooltip: { enabled: true },
  };

  const series = [{ name: "Data", data: [10, 15, 8, 12, 14] }];

  return (
    <Chart options={options} series={series} type="line" height={130} width="100%" />
  );
};

export default SmallLineChart;

