import React from "react";
import { screen, render } from "@testing-library/react";
import Content from "./Content";

const part1 = {
  name: "Fundamentals of React",
  exercises: 10,
};
const part2 = {
  name: "Using props to pass data",
  exercises: 7,
};
const part3 = {
  name: "State of a component",
  exercises: 14,
};
const parts = [part1, part2, part3];

it("Renders Content component text", () => {
  render(<Content parts={parts} />);

  const contentElement = screen.getByText(/Fundamentals of React/);
  expect(contentElement).toBeInTheDocument();
});
