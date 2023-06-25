import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

function App() {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const parts = [part1, part2, part3];
  const exercises = [exercises1, exercises2, exercises3];

  return (
    <>
      <div className="container mx-auto my-10 flex max-w-xl flex-col gap-3 rounded border border-gray-300 p-3">
        <Header course={course} />
        <Content parts={parts} exercises={exercises} />
        <Total exercises={[exercises1, exercises2, exercises3]} />
      </div>
    </>
  );
}

export default App;
