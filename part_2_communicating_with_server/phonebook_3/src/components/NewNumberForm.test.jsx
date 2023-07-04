import React from "react";
import { test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewNumberForm from "./NewNumberForm";

test("renders the form", () => {
  const persons = [{ name: "Arto Hellas" }];
  render(<NewNumberForm handleAddPerson={vi.fn()} persons={persons} />);
  const formLabel = screen.getByText(/Name:/);
  expect(formLabel).toBeInTheDocument();
});

test("updates name state on input change", async () => {
  const persons = [{ name: "Arto Hellas" }];
  render(<NewNumberForm handleAddPerson={vi.fn()} persons={persons} />);
  const user = userEvent.setup();
  const nameInput = screen.getByRole("textbox", { name: "Name:" });
  await user.type(nameInput, "Joe");
  expect(nameInput).toHaveValue("Joe");
});

test("should call handleAddPerson when 'Add number' button is clicked with a valid name", async () => {
  const mockFunction = vi.fn();
  const persons = [{ name: "Arto Hellas" }];
  render(<NewNumberForm handleAddPerson={mockFunction} persons={persons} />);

  const buttonElement = screen.getByRole("button", { name: "Add number" });
  const nameInput = screen.getByRole("textbox", { name: "Name:" });

  const user = userEvent.setup();
  await user.click(buttonElement);

  // expect(mockFunction).toHaveBeenCalled();
  expect(mockFunction.mock.calls.length).toBe(1);
  expect(nameInput.value).toBe("");
});

test("onSubmit is called with newName as an argument", async () => {
  const mockFunction = vi.fn();
  const persons = [{ name: "Arto Hellas" }];
  render(<NewNumberForm handleAddPerson={mockFunction} persons={persons} />);

  const nameInput = screen.getByRole("textbox", { name: "Name:" });
  const addNumberButton = screen.getByRole("button", { name: "Add number" });

  const user = userEvent.setup();
  await user.type(nameInput, "Joe");
  await user.click(addNumberButton);

  expect(mockFunction.mock.calls[0][0]).toEqual("Joe");
});

test("should display an alert when handleAddPerson is called with an invalid name", async () => {
  window.alert = vi.fn(); // provide an empty implementation for window.alert

  const mockFunction = vi.fn();
  const persons = [{ name: "Arto Hellas" }];
  render(<NewNumberForm handleAddPerson={mockFunction} persons={persons} />);

  const nameInput = screen.getByRole("textbox", { name: "Name:" });
  const addNumberButton = screen.getByRole("button", { name: "Add number" });

  const user = userEvent.setup();
  await user.type(nameInput, "Arto Hellas");
  await user.click(addNumberButton);

  expect(mockFunction).not.toHaveBeenCalled();
  expect(nameInput.value).toBe("Arto Hellas");
  expect(window.alert).toHaveBeenCalledWith(
    "Arto Hellas is already added to the phonebook."
  );
});
