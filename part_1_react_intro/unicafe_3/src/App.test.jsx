import React from "react";
import { expect, it } from "vitest";
import { screen, render } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

it("renders app component", () => {
  render(<App />);
  expect(screen.getByText("give feedback")).toBeInTheDocument();
  expect(screen.getByText("statistics")).toBeInTheDocument();
});

it('increments the "good" count when the "good" button is clicked', async () => {
  render(<App />);
  const user = userEvent.setup();
  const goodButton = screen.getByRole("button", { name: /good/i });
  await user.click(goodButton);
  const goodStatistic = screen.getByText(/good 1/);
  expect(goodStatistic).toBeInTheDocument();
});

it('increments the "neutral" count when the "neutral" button is clicked', async () => {
  render(<App />);
  const user = userEvent.setup();
  const neutralButton = screen.getByRole("button", { name: /neutral/i });
  await user.click(neutralButton);
  const neutralStatistic = screen.getByText(/neutral 1/);
  expect(neutralStatistic).toBeInTheDocument();
});

it('increments the "bad" count when the "bad" button is clicked', async () => {
  render(<App />);
  const user = userEvent.setup();
  const badButton = screen.getByRole("button", { name: /bad/i });
  await user.click(badButton);
  const badStatistic = screen.getByText(/bad 1/);
  expect(badStatistic).toBeInTheDocument();
});
