import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  const calculateTotal = () => good + bad + neutral;
  const calculateAverage = () => (good - bad) / calculateTotal() || 0;
  const calculatePositivePercentage = () =>
    (good / calculateTotal()) * 100 || 0;

  return (
    <>
      <table>
        <tbody>
          <StatisticLine text={"good"} value={good} />
          <StatisticLine text={"neutral"} value={neutral} />
          <StatisticLine text={"bad"} value={bad} />
          <StatisticLine text={"all"} value={calculateTotal()} />
          <StatisticLine text={"average"} value={`${calculateAverage()}%`} />
          <StatisticLine
            text={"positive"}
            value={`${calculatePositivePercentage()}%`}
          />
        </tbody>
      </table>
    </>
  );
};

export default Statistics;
