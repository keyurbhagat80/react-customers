import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import ReactDOM from "react-dom";

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });

  it("renders home link", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("renders Create link", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Create Customer/i);
    expect(linkElement).toBeInTheDocument();
  });
});
