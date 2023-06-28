import React from "react";
import { it, expect, vi } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

it("renders button", () => {
  render(<Button text={"good"} handleClick={vi.fn()} />);
  const button = screen.getByText(/good/);
  expect(button).toBeInTheDocument();
});

it("executes the button's onClick handler", async () => {
  const mockFunction = vi.fn();
  render(<Button text={"good"} handleClick={mockFunction} />);
  const user = userEvent.setup();
  const button = screen.getByText(/good/i);
  await user.click(button);

  expect(mockFunction).toHaveBeenCalledTimes(1);
});
