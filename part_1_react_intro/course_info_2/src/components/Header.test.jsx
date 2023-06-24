import React from "react";
import { render, screen } from "@testing-library/react";
import Header from './Header'

it('Header renders successfully', () => {
  const course = 'Half Stack application development';

  render(<Header course={course} />);
  const header = screen.getByText('Half Stack application development');

  expect(header).toBeInTheDocument();
});