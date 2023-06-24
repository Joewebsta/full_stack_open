import React from "react";
import { render, screen } from "@testing-library/react";
import Total from "./Total";

it("Renders Total component test", () => {
  const exercises1 = 10;
  const exercises2 = 14;
  const exercises3 = 7;
  const exercises = [exercises1, exercises2, exercises3];

  render(<Total exercises={exercises} />);
  const totalElement = screen.getByText(/Number of exercises 31/);
  expect(totalElement).toBeInTheDocument();
});
