import React from "react";
import { screen, render } from "@testing-library/react";
import { it, expect } from "vitest";
import StatisticLine from "./StatisticLine";

it("renders StatisticLine component with text prop", () => {
  render(<StatisticLine text={"neutral"} value={10} />);
  const statisticsLine = screen.getByText(/neutral/);
  expect(statisticsLine).toBeInTheDocument();
});

it("renders StatisticLine component with value prop", () => {
  render(<StatisticLine text={"neutral"} value={10} />);
  const statisticsLine = screen.getByText(/10/);
  expect(statisticsLine).toBeInTheDocument();
});
