import React from "react";
import Chart from "react-apexcharts";

const LargeLineChart = () => {
  const options = {
    chart: {
      type: "line",
      toolbar: { show: false },
    },
    xaxis: {
      categories: ["10-Feb", "12-Feb", "14-Feb", "16-Feb", "17-Feb", "20-Feb"],
    },
    yaxis: { labels: { show: true } },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: ["#ffcc00"],
    },
    tooltip: { enabled: true },
  };

  const series = [{ name: "Margin %", data: [5, 8, 12, 10, 9] }];

  return (
    <Chart options={options} series={series} type="line" height={250} width="90%" />
  );
};

export default LargeLineChart;
