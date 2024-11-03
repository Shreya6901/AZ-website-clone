import React, { useState } from "react";
import "./LearningMaterial.css";

const parts = [
  {
    title: "Part 1",
    duration: "02:00:00",
    difficulty: "Medium",
    items: [
      { name: "Video 1", type: "Video", duration: "10:00" },
      { name: "Article 1", type: "Article", duration: "10:00" },
      { name: "Quiz 1", type: "Quiz", duration: "10:00" },
      { name: "Coding Exercise 1", type: "Coding", duration: "10:00" },
    ],
  },
  {
    title: "Part 2",
    duration: "02:00:00",
    difficulty: "Medium",
    items: [],
  },
  {
    title: "Part 3",
    duration: "02:00:00",
    difficulty: "Medium",
    items: [],
  },
];

const LearningMaterial = () => {
  const [expandedPart, setExpandedPart] = useState(null);

  const togglePart = (index) => {
    setExpandedPart(expandedPart === index ? null : index);
  };

  return (
    <div className="learning-material">
      {parts.map((part, index) => (
        <div key={index} className="part">
          <div onClick={() => togglePart(index)} className="part-header">
            <h3>{part.title}</h3>
            <span>{part.duration}</span>
            <span>{part.difficulty}</span>
          </div>
          {expandedPart === index && (
            <div className="part-items">
              {part.items.map((item, idx) => (
                <div key={idx} className="item">
                  <span>{item.name}</span>
                  <span>{item.duration}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LearningMaterial;
