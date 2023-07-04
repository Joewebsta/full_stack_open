import React from "react";
import { test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewNumberForm from "./NewNumberForm";

test("renders the form", () => {
  render(<NewNumberForm handleAddPerson={vi.fn()} />);
  const formLabel = screen.getByText(/Name:/);
  expect(formLabel).toBeInTheDocument();
});

test("updates name state on input change", async () => {
  render(<NewNumberForm handleAddPerson={vi.fn()} />);
  const user = userEvent.setup();
  const nameInput = screen.getByRole("textbox", { name: "Name:" });
  await user.type(nameInput, "Joe");
  expect(nameInput).toHaveValue("Joe");
});

test("calls onSubmit when 'add number' button is clicked", async () => {
  const mockFunction = vi.fn();
  render(<NewNumberForm handleAddPerson={mockFunction} />);
  const user = userEvent.setup();
  const buttonElement = screen.getByRole("button", { name: "Add number" });
  await user.click(buttonElement);
  // expect(mockFunction).toHaveBeenCalled();
  expect(mockFunction.mock.calls.length).toBe(1);
});

test("onSubmit is called with new name", async () => {
  const mockFunction = vi.fn();
  render(<NewNumberForm handleAddPerson={mockFunction} />);

  const nameInput = screen.getByRole("textbox", { name: "Name:" });
  const addNumberButton = screen.getByRole("button", { name: "Add number" });

  const user = userEvent.setup();
  await user.type(nameInput, "Joe");
  await user.click(addNumberButton);

  expect(mockFunction.mock.calls[0][0]).toEqual("Joe");
});
