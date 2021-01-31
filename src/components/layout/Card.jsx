import "./Card.css";
import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ titulo, children, color }) => {
  const cardStyle = {
    backgroundColor: color || "#f00",
    borderColor: color || "#F00",
  };
  return (
    <div className="card" style={cardStyle}>
      <div className="title">{titulo}</div>
      <div className="content">{children}</div>
    </div>
  );
};
