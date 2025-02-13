import React, { useState } from "react";
import "./PaymentPage.css";

const PaymentPage = ({ handleNext }) => {
  const [activeTab, setActiveTab] = useState("card");

  return (
    <div className="payment-container">
      <div className="payment-box">
        <h2>💳 Secure Payment</h2>

        {/* Payment Method Tabs */}
        <div className="tab-container">
          <button
            className={`tab ${activeTab === "card" ? "active" : ""}`}
            onClick={() => setActiveTab("card")}
          >
            Credit/Debit Card
          </button>
          <button
            className={`tab ${activeTab === "upi" ? "active" : ""}`}
            onClick={() => setActiveTab("upi")}
          >
            UPI
          </button>
          <button
            className={`tab ${activeTab === "netbanking" ? "active" : ""}`}
            onClick={() => setActiveTab("netbanking")}
          >
            Net Banking
          </button>
        </div>

        {/* Credit/Debit Card Form */}
        {activeTab === "card" && (
          <div className="payment-form">
            <label>Card Number</label>
            <input type="text" placeholder="XXXX XXXX XXXX XXXX" maxLength="16" />
            <label>Card Holder Name</label>
            <input type="text" placeholder="Full Name" />
            <div className="flex">
              <div>
                <label>Expiry Date</label>
                <input type="text" placeholder="MM/YY" maxLength="5" />
              </div>
              <div>
                <label>CVV</label>
                <input type="password" placeholder="***" maxLength="3" />
              </div>
            </div>
            <button className="pay-btn" onClick={handleNext}>Pay Now</button>
          </div>
        )}

        {/* UPI Form */}
        {activeTab === "upi" && (
          <div className="payment-form">
            <label>UPI ID</label>
            <input type="text" placeholder="yourname@upi" />
            <button className="pay-btn" onClick={handleNext}>Pay via UPI</button>
          </div>
        )}

        {/* Net Banking Form */}
        {activeTab === "netbanking" && (
          <div className="payment-form">
            <label>Select Bank</label>
            <select>
              <option>State Bank of India</option>
              <option>HDFC Bank</option>
              <option>ICICI Bank</option>
              <option>Axis Bank</option>
              <option>Other Banks</option>
            </select>
            <button className="pay-btn" onClick={handleNext}>Proceed to Pay</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;



