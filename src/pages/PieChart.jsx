import React from "react";
import Chart from "react-apexcharts";

const PieChart = () => {
  const options = {
    labels: ["Remaining", "Consumed"],
    colors: ["#009688", "#ffcc00"],
    legend: { position: "bottom" },
    dataLabels: { enabled: true },
  };

  const series = [65, 35]; // 65% Remaining, 35% Consumed

  return (
    <Chart options={options} series={series} type="donut" height={250} />
  );
};

export default PieChart;
