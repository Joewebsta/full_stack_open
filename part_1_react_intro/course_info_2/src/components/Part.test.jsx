import React from "react";
import { screen, render } from "@testing-library/react";
import Part from "./Part";

it("Renders part component", () => {
  render(<Part name={"Fundamentals of React"} exercise={10} />);
  const partElement = screen.getByText(/Fundamentals of React/i);
  expect(partElement).toBeInTheDocument();
});
