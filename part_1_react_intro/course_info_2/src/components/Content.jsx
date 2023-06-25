import React from "react";

const Content = ({ part, exercise }) => {
  return (
    <p>
      <span>{part}</span> <span className="font-bold">{exercise}</span>
    </p>
  );
};

export default Content;
