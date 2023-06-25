import React from "react";
import { render, screen } from "@testing-library/react";
import Total from "./Total";

const parts = [
  {
    name: "Fundamentals of React",
    exercises: 10,
  },
  {
    name: "Using props to pass data",
    exercises: 7,
  },
  {
    name: "State of a component",
    exercises: 14,
  },
];

it("Renders Total component", () => {
  render(<Total parts={parts} />);
  const totalElement = screen.getByText(/Number of exercises/i);
  expect(totalElement).toBeInTheDocument();
});

it("Renders correct exercises total", () => {
  render(<Total parts={parts} />);
  const totalElement = screen.getByText(/31/i);
  expect(totalElement).toBeInTheDocument();
});
