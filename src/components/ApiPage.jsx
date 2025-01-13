import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserCard } from "./UserCard";

const ApiPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [showCard, setShowCard] = useState(false);

  const getRandomUser = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    return data;
  };

  const fetchUser = () => {
    getRandomUser().then((user) => {
      setUserData(user.results[0]);
      setShowCard(true);
    });
  };

  return (
    <div className="App">
      {!showCard ? (
        <button onClick={fetchUser}>Fetch User Details</button>
      ) : (
        <>
          {userData && <UserCard data={userData} />}
          <button onClick={fetchUser}>Refresh User</button>
        </>
      )}
      <button className="back-button3" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
};

export default ApiPage;
