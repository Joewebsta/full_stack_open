import React from "react";
import Part from "./Part";

const Content = ({ parts, exercises }) => {
  return (
    <div className="space-y-3">
      <Part exercise={exercises[0]} part={parts[0]} />
      <Part exercise={exercises[1]} part={parts[1]} />
      <Part exercise={exercises[2]} part={parts[2]} />
    </div>
  );
};

export default Content;
