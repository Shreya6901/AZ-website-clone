import React from "react";
import Item from "./Item";
import "../styles/Part.css";

const Part = ({ title, difficulty, progress, items }) => {
  return (
    <div className="part">
      <h4>{title}</h4>
      <p>Difficulty: {difficulty}</p>
      <p>Progress: {progress}%</p>
      {items.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </div>
  );
};

export default Part;
