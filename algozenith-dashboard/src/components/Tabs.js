import React, { useState } from "react";
import "../styles/Tabs.css";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("learning-material");

  return (
    <div className="tabs">
      <button
        className={activeTab === "mentor-sessions" ? "active" : ""}
        onClick={() => setActiveTab("mentor-sessions")}
      >
        Mentor Sessions
      </button>
      <button
        className={activeTab === "learning-material" ? "active" : ""}
        onClick={() => setActiveTab("learning-material")}
      >
        Learning Material
      </button>
    </div>
  );
};

export default Tabs;
