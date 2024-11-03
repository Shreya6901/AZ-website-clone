import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button onClick={toggleSidebar} className="close-btn">
        ✕
      </button>
      <h2>AlgoZenith</h2>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/learn">Learn</Link>
        </li>
        <li>
          <Link to="/forums">Forums</Link>
        </li>
        <li>
          <Link to="/upskill">Upskill</Link>
        </li>
        <li>
          <Link to="/contest">Contest</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
