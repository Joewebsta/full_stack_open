import React from "react";

const Part = ({ part, exercise }) => {
  return (
    <p>
      <span>{part}</span> <span className="font-bold">{exercise}</span>
    </p>
  );
};

export default Part;
