import React from "react";

const Total = ({ parts }) => {
  console.log("PARTS:", parts);

  const calcTotalExercises = () => {
    return parts.reduce((sum, part) => sum + part.exercises, 0);
  };

  return (
    <p>
      Number of exercises{" "}
      <span className="font-bold">{calcTotalExercises()}</span>
    </p>
  );
};

export default Total;
