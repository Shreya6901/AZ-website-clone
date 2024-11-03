import React from "react";
import "../styles/Item.css";

const Item = ({ type, name, duration }) => {
  return (
    <div className="item">
      <p>
        {type} - {name}
      </p>
      <span>{duration}</span>
    </div>
  );
};

export default Item;
