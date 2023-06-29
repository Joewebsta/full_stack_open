import React from "react";

const Button = ({ text, handleClick }) => {
  return (
    <button
      className="rounded bg-blue-500 px-2 font-bold text-white hover:bg-blue-700"
      onClick={handleClick}
    >
      <span className="text-xs">{text}</span>
    </button>
  );
};

export default Button;
