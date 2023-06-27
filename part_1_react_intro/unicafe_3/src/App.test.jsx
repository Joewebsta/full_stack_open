import React from "react";
import { describe, expect, it } from "vitest";
import { screen, render } from "@testing-library/react";
import App from "./App";

it("renders app component", () => {
  render(<App />);
  expect(screen.getByText("give feedback")).toBeInTheDocument();
  expect(screen.getByText("statistics")).toBeInTheDocument();
});
