import React from "react";

const Total = ({ exercises }) => {
  const calcTotalExercises = () => {
    return exercises.reduce((sum, exercises) => sum + exercises);
  };

  return <p>Number of exercises {calcTotalExercises()}</p>;
};

export default Total;
