import React from "react";

const Total = ({ exercises }) => {
  const calcTotalExercises = () => {
    return exercises.reduce((sum, exercises) => sum + exercises);
  };

  return (
    <p>
      Number of exercises{" "}
      <span className="font-bold">{calcTotalExercises()}</span>
    </p>
  );
};

export default Total;
