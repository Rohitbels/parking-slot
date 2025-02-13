import "./ActualBooking.css";

// eslint-disable-next-line react/prop-types
const ActualBooking = ({ name, dateTime, companyName, price }) => {
  return (
    <div className="booking-container">
      <div className="booking-card">
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Date And Time:</strong> {dateTime}
        </p>
        <p>
          <strong>Company Name:</strong> {companyName}
        </p>

        <label>
          <strong>Select Capacity:</strong>
        </label>
        <select className="booking-select">
          <option value="2 wheeler">2 Wheeler</option>
          <option value="4 wheeler">4 Wheeler</option>
        </select>

        <p>
          <strong>Price:</strong> {price}
        </p>
        <button className="booking-button">Book</button>
      </div>
    </div>
  );
};

export default ActualBooking;
