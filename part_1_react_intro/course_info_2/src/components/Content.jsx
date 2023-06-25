import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <div className="space-y-3">
      <Part exercise={parts[0].exercises} name={parts[0].name} />
      <Part exercise={parts[1].exercises} name={parts[1].name} />
      <Part exercise={parts[2].exercises} name={parts[2].name} />
    </div>
  );
};

export default Content;
