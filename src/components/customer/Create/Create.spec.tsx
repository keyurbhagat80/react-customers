import React from "react";

import Create from "./Create";
import { render, act, cleanup, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<Create />", () => {
  afterEach(cleanup);
  it("matched snapshot", () => {
    const { asFragment } = render(<Create />);
    expect(asFragment()).toMatchSnapshot();
  });

  const mockChangeValue = jest.fn();

  it("shows all required input fields with empty values", () => {
    const { getByTestId } = render(<Create />);

    expect(getByTestId("firstName").value).toBe("");
    expect(getByTestId("lastName").value).toBe("");
    expect(getByTestId("dob").value).toBe("");
  });

  it("should update value on input change of firstName", async () => {
    const { getByTestId } = render(<Create />);

    act(async () => {
      await userEvent.type(getByTestId("firstName"), "abc");
    });

    expect(getByTestId("firstName").value).toBe("abc");
  });

  it.skip("should submit the form on button click", async () => {
    const { getByTestId } = render(<Create />);

    const stubbedValue = {
      firstName: "abc",
      lastName: "abc",
      dob: "abc"
    };
    act(() => {
      userEvent.type(getByTestId("firstName"), "abc");
      userEvent.type(getByTestId("lastName"), "abc");
      userEvent.type(getByTestId("dob"), "abc");
      fireEvent.submit(getByTestId("create-post-form"));
    });

    expect(mockChangeValue).toHaveBeenCalledWith(stubbedValue);
  });
});
