import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmailPage from "./pages/EmailPage";
import OtpPage from "./pages/OtpPage";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmailPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* <Route path="/" element={<DashboardPage />} /> */}
        <Route path="/emailpage" element={<EmailPage />} /> {/* Correct route */}
      </Routes>
    </Router>
  );
};

export default App;
