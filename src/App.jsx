import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import FormPage from "./components/FormPage";
import ApiPage from "./components/ApiPage";
import DisplayPage from "./components/DisplayPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/api" element={<ApiPage />} />
        <Route path="/display" element={<DisplayPage />} />{" "}
        {/* new route for DisplayPage */}
      </Routes>
    </Router>
  );
};

export default App;
