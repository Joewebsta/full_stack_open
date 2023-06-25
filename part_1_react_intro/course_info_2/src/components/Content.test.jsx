import React from "react";
import { screen, render } from "@testing-library/react";
import Content from "./Content";

it("Renders Content component text", () => {
  const part = "Fundamentals of React";
  const exercise = 10;

  render(<Content parts={[part]} exercises={[exercise]} />);

  const contentElement = screen.getByText(/Fundamentals of React/);
  expect(contentElement).toBeInTheDocument();
});
