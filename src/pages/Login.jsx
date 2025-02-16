// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [otp, setOtp] = useState("");
//   const [generatedOTP, setGeneratedOTP] = useState("");
//   const [timer, setTimer] = useState(30); // Countdown timer (30 seconds)
//   const navigate = useNavigate();

//   useEffect(() => {
//     generateOTP();
//   }, []);

//   useEffect(() => {
//     if (timer > 0) {
//       const interval = setInterval(() => {
//         setTimer((prevTimer) => prevTimer - 1);
//       }, 1000);
//       return () => clearInterval(interval);
//     } else {
//       alert("OTP Expired! Please request a new OTP.");
//       generateOTP();
//     }
//   }, [timer]);

//   const generateOTP = () => {
//     const newOTP = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
//     setGeneratedOTP(newOTP);
//     localStorage.setItem("otp", newOTP);
//     setTimer(30); // Reset timer
//     alert(`Your OTP is: ${newOTP}`); // Show OTP in alert
//   };

//   const handleOTPSubmit = () => {
//     const storedOTP = localStorage.getItem("otp");
//     if (otp === storedOTP) {
//       alert("OTP Verified Successfully!");
//       navigate("/dashboard"); // Navigate to Dashboard
//     } else {
//       alert("Invalid OTP. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <h2>Enter OTP</h2>
//       <input
//         type="text"
//         value={otp}
//         onChange={(e) => setOtp(e.target.value)}
//         placeholder="Enter OTP"
//       />
//       <button onClick={handleOTPSubmit}>Verify OTP</button>
//       <p>OTP expires in: {timer} seconds</p>
//       <button onClick={generateOTP}>Resend OTP</button>
//     </div>
//   );
// };
// <button onClick={() => alert(`Your OTP is: ${generatedOTP}`)}>Show OTP</button>

// export default Login;

