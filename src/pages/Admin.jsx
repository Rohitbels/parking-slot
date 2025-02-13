import { useState } from "react";
import "./admin.css"; // Import CSS

const Admin = () => {
  const [companyName, setCompanyName] = useState("");
  const [twoWheelerSlots, setTwoWheelerSlots] = useState("");
  const [fourWheelerSlots, setFourWheelerSlots] = useState("");
  const [twoWheelerPrice, setTwoWheelerPrice] = useState("");
  const [fourWheelerPrice, setFourWheelerPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      companyName,
      twoWheelerSlots,
      fourWheelerSlots,
      twoWheelerPrice,
      fourWheelerPrice,
    });
    alert("Company Registered Successfully!");
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>🚗 Company Registration</h2>

        <form onSubmit={handleSubmit}>
          <label>Company Name</label>
          <input
            type="text"
            placeholder="Enter company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />

          <label>Two-Wheeler Slots</label>
          <select value={twoWheelerSlots} onChange={(e) => setTwoWheelerSlots(e.target.value)} required>
            <option value="">Select Slots</option>
            {[5, 10, 20, 50, 100].map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>

          <label>Four-Wheeler Slots</label>
          <select value={fourWheelerSlots} onChange={(e) => setFourWheelerSlots(e.target.value)} required>
            <option value="">Select Slots</option>
            {[5, 10, 20, 50, 100].map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>

          <label>Price for Two-Wheeler Slot</label>
          <select value={twoWheelerPrice} onChange={(e) => setTwoWheelerPrice(e.target.value)} required>
            <option value="">Select Price</option>
            {[50, 100, 200, 500].map((price) => (
              <option key={price} value={price}>
                ₹{price}
              </option>
            ))}
          </select>

          <label>Price for Four-Wheeler Slot</label>
          <select value={fourWheelerPrice} onChange={(e) => setFourWheelerPrice(e.target.value)} required>
            <option value="">Select Price</option>
            {[100, 200, 500, 1000].map((price) => (
              <option key={price} value={price}>
                ₹{price}
              </option>
            ))}
          </select>

          <button type="submit">Register Now 🚀</button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
