// import react
import React from "react";
import { it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

it("renders header", () => {
  render(<Header />);
  const header = screen.getByText("Phonebook");
  expect(header).toBeInTheDocument();
});
