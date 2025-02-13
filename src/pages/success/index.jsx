import React from "react";
import "./SuccessPage.css";

const SuccessPage = () => {
    return (
  <div className="success-container">
  <div className="success-box">
  <div className="icon-container">
            ✅
  </div>
  <h2>Booking Confirmed!</h2>
  <p>Your car parking has been successfully booked.</p>
  <button onClick={() => window.location.href = "/"} className="home-btn">
            Go to Home
  </button>
  </div>
  </div>
    );
  };

  export default SuccessPage;