import React from "react";
import "./SuccessPage.css";


const SuccessPage = (props) => {
  const { bookingDetails } = props;

  console.log('bookingDetails', bookingDetails)

  return (
    <div className="success-container">
      <div className="success-box">
        <div className="icon-container">
          ✅
        </div>
        <h2>Booking Confirmed!</h2>
        <p>Your car parking has been successfully booked.</p>

        <div className="booking-details">
          <p><strong>Bookign ID:</strong>100001010111</p>
          <p><strong>Company Name:</strong> ₹{bookingDetails.companyName}</p>
          <p><strong>Price:</strong> ₹{bookingDetails.calculatePrice}</p>
          <p><strong>Available four-wheeler capacity:</strong> ₹{bookingDetails.availfourWheelerCapacity}</p>
          <p><strong>Available tow-wheeler capacity:</strong> ₹{bookingDetails.availtwoWheelerCapacity}</p>
          <p><strong>Four-Wheeler Capacity:</strong> {bookingDetails.fourWheelerCapacity} vehicles</p>
          <p><strong>Two-Wheeler Capacity:</strong> {bookingDetails.twoWheelerCapacity} vehicles</p>
        </div>

        <button onClick={() => window.location.href = "/"} className="home-btn">
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
