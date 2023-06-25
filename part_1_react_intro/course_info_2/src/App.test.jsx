import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

it("Renders app component", () => {
  render(<App />);
  const header = screen.getByText("Half Stack application development");
  expect(header).toBeInTheDocument();
});
