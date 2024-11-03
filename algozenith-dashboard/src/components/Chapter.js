import React from "react";
import Part from "./Part";
import "../styles/Chapter.css";

const Chapter = ({ title, duration, parts }) => {
  return (
    <div className="chapter">
      <h3>{title}</h3>
      <p>Duration: {duration}</p>
      {parts.map((part, index) => (
        <Part key={index} {...part} />
      ))}
    </div>
  );
};

export default Chapter;
