import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Code My Thought</h1>

      <div className="button-group">
        <button className="redbu" onClick={() => navigate("/form")}>
          Form
        </button>
        <button className="bluebu" onClick={() => navigate("/api")}>
          API
        </button>
      </div>
    </div>
  );
};

export default Home;
