import React from "react";
import { expect, it } from "vitest";
import { screen, render } from "@testing-library/react";
import Header from "./Header";

it("renders the header component", () => {
  render(<Header text={"give feedback"} />);
  const header = screen.getByText(/give feedback/);
  expect(header).toBeInTheDocument();
});
