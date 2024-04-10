/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ErrorPage from "./ErrorPage";

describe("ErrorPage component", () => {
  it("renders without crashing", () => {
    render(<ErrorPage />);
  });

  it("displays the error message when provided", () => {
    const errorMessage = "Page not found";
    const { getByText } = render(<ErrorPage error={new Error(errorMessage)} />);

    expect(getByText(errorMessage)).toBeInTheDocument();
  });

  it("displays a default error message when no error is provided", () => {
    const { getByText } = render(<ErrorPage />);

    expect(
      getByText("Sorry, an unexpected error has occurred.")
    ).toBeInTheDocument();
  });
});
