import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./emailPage.css";

const EmailPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = () => {
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }

    // Generate OTP and pass it to the OTP page
    const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
    localStorage.setItem("generatedOtp", generatedOtp); // Store OTP for verification

    alert(`OTP sent to ${email}: ${generatedOtp}`); // Simulate OTP sending

    navigate("/otp"); // Redirect to OTP page
  };

  return (
    <div className="page-container">
      <div className="header">Analytics Dashboard</div>
      <div className="inner-box">
        <div className="left-side">
          <h3>Sign In</h3>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSendOtp}>Send OTP</button>
        </div>
        <div className="right-side">
          <p>Web Application with Analytics Dashboard</p>
        </div>
      </div>
      <div className="footer">© 2025. Greendzine Technologies Pvt Ltd. All Rights Reserved.</div>
    </div>
  );
};

export default EmailPage;
