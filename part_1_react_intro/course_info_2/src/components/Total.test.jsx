import React from "react";
import { render, screen } from "@testing-library/react";
import Total from "./Total";

const exercises1 = 10;
const exercises2 = 14;
const exercises3 = 7;
const exercises = [exercises1, exercises2, exercises3];

it("Renders Total component", () => {
  render(<Total exercises={exercises} />);
  const totalElement = screen.getByText(/Number of exercises/i);
  expect(totalElement).toBeInTheDocument();
});

it("Renders correct exercises total", () => {
  render(<Total exercises={exercises} />);
  const totalElement = screen.getByText(/31/i);
  expect(totalElement).toBeInTheDocument();
});
