import React from "react";
import "./ChapterSidebar.css";

const chapters = [
  { name: "Chapter 1", duration: "05:00:00" },
  { name: "Chapter 2", duration: "03:30:00" },
  { name: "Chapter 3", duration: "04:15:00" },
  { name: "Chapter 4", duration: "02:45:00" },
  { name: "Chapter 5", duration: "06:00:00" },
];

const ChapterSidebar = () => {
  return (
    <div className="chapter-sidebar">
      {chapters.map((chapter, index) => (
        <button key={index} className="chapter-button">
          {chapter.name} <span>{chapter.duration}</span>
        </button>
      ))}
    </div>
  );
};

export default ChapterSidebar;
