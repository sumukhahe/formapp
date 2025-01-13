import { useLocation } from "react-router-dom";
import "./DisplayPage.css";

const DisplayPage = () => {
  const { state } = useLocation();
  const { username, phone, email, dobb, addr } = state;

  return (
    <div className="display-container">
      <h1 className="display-heading">Submitted Data</h1>
      <div className="user-details">
        <div className="detail-item">
          <label>Username:</label>
          <p>{username}</p>
        </div>
        <div className="detail-item">
          <label>Phone Number:</label>
          <p>{phone}</p>
        </div>
        <div className="detail-item">
          <label>Email:</label>
          <p>{email}</p>
        </div>
        <div className="detail-item">
          <label>Date of Birth:</label>
          <p>{dobb}</p>
        </div>
        <div className="detail-item">
          <label>Address:</label>
          <p>{addr}</p>
        </div>
      </div>
      <button className="back-button4" onClick={() => window.history.back()}>
        Go Back
      </button>
    </div>
  );
};

export default DisplayPage;
