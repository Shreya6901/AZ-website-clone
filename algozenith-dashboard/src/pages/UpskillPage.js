import React, { useState } from "react";
import Sidebar from "../components/Sidebar"; // Main sidebar with navigation
import ChapterSidebar from "../components/ChapterSidebar"; // Sidebar with chapter buttons
import LearningMaterial from "../components/LearningMaterial";
import "./UpskillPage.css";

const UpskillPage = () => {
  const [activeTab, setActiveTab] = useState("learning");

  return (
    <div className="upskill-page">
      <Sidebar /> {/* Render main sidebar */}
      <div className="main-content">
        <div className="tabs">
          <button onClick={() => setActiveTab("mentor")}>
            Mentor Sessions
          </button>
          <button onClick={() => setActiveTab("learning")}>
            Learning Material
          </button>
          <button className="how-it-works">How it works</button>
        </div>
        <div className="content">
          <ChapterSidebar /> {/* Render sidebar with chapters */}
          {activeTab === "learning" && <LearningMaterial />}
        </div>
      </div>
    </div>
  );
};

export default UpskillPage;
