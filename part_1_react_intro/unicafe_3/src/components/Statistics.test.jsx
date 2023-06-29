import React from "react";
import { screen, render } from "@testing-library/react";
import { it, expect } from "vitest";
import Statistics from "./Statistics";

it("renders Statistics component", () => {
  render(<Statistics good={0} bad={0} neutral={0} />);
  const element = screen.getByText(/neutral/i);
  expect(element).toBeInTheDocument();
});
