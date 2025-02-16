import React from "react";
import { FaHome, FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SmallLineChart from "../pages/SmallLineChart";
import PieChart from "../pages/PieChart";
import LineChart from "../pages/LineChart";
import "../Dashboard.css";

const DashboardPage = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Logout function
  const handleLogout = () => {
    alert("Logging out..."); // Optional feedback
    navigate("/EmailPage"); // Redirect to login page
  };
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <FaHome className="sidebar-icon" />
        <FaCog className="sidebar-icon" />
      </div>

      {/* Main Dashboard Content */}
      <div className="dashboard-content">
        <h2 className="header">Analytics Dashboard</h2>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>

        <div className="dashboard-grid">
          {/* Left Column - Small Line Charts */}
          <div className="left-column">
            <div className="small-chart">
              <h4>Inventory</h4>
              <SmallLineChart />
              <p className="chart-label"style={{ position: "relative", textAlign: "center" }}>93%</p>
            </div>
            <div className="small-chart">
              <h4>Orders</h4>
              <SmallLineChart />
              <p className="chart-label"style={{ position: "relative", textAlign: "center" }}>65%</p>
            </div>
          </div>

          {/* Center Column - Pie Chart */}
          <div className="center-column">
            <h4>Battery</h4>
            <PieChart />
            <p className="chart-label"style={{ position: "relative", textAlign: "center" }}>65%</p>
          </div>

          {/* Right Column - Large Line Chart */}
          <div className="right-column">
            <h4>Margin %</h4>
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

