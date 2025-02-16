import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "/src/otpPage.css";

const OtpPage = () => {
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(localStorage.getItem("generatedOtp") || "");
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();

  // Countdown timer effect
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleVerifyOtp = () => {
    if (!generatedOtp) {
      alert("OTP expired or not generated. Please resend.");
      return;
    }

    if (otp === generatedOtp) {
      alert("OTP validated successfully!");
      navigate("/dashboard"); // Redirect after successful verification
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const handleResendOtp = () => {
    const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(newOtp);
    setOtp(""); // Clear input
    setTimer(30); // Reset timer
    localStorage.setItem("generatedOtp", newOtp);
    alert(`New OTP sent: ${newOtp}`);
  };

  return (
    <div>
      <div className="header">Analytics Dashboard</div>
    <div className="container">
      {/* Left Section */}
      <div className="left-section">
        <h2>Enter OTP sent to Email</h2>
        <input
          type="text"
          placeholder="OTP"
          className="input-field"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <div className="resend-section">
          <span className="resend-text" onClick={handleResendOtp}>
            Resend OTP
          </span>
          <span className="timer">{timer > 0 ? `${timer} sec` : "0:00 sec"}</span>
        </div>
        <button className="button" onClick={handleVerifyOtp}>
          Validate
        </button>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <p>Web Application with Analytics Dashboard</p>
      </div>
    </div>
    </div>
  );
};

export default OtpPage;
