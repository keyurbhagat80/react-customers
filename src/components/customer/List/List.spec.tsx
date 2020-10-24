import React from "react";
import axios from "axios";
import List, { getAllCustomers } from "./List";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

jest.mock("axios");

describe("<List />", () => {
  const stubbedCustomers = {
    data: [
      {
        id: 1,
        firstName: "abc",
        lastName: "ppp",
        dob: "22/12/2000"
      }
    ]
  };

  describe("all customers request", () => {
    it("should return response", async () => {
      axios.get = jest.fn();
      // @ts-ignore
      axios.get.mockResolvedValue(stubbedCustomers);

      await expect(getAllCustomers()).resolves.toEqual(stubbedCustomers);

      expect(axios.get).toHaveBeenCalledWith(`http://localhost:5000/customers`);
    });

    it("should return error from an API", async () => {
      const errorMessage = "Network Error";

      // @ts-ignore
      axios.get.mockReturnValue(Promise.reject(new Error(errorMessage)));

      await expect(getAllCustomers()).resolves.toEqual(new Error(errorMessage));
    });
  });

  describe("should render message when no customers found", () => {
    it("should render NO found mesasge", () => {
      const { getByTestId, getByText, getByRole } = render(<List />);

      expect(getByText("Dashboard")).toBeInTheDocument();

      expect(getByRole("heading", { level: 2 })).toBeInTheDocument();

      expect(getByTestId("search")).toBeInTheDocument();
    });

    it.skip("shows customers when data are fetched", async () => {
      // const wrapper = setup();

      // const tree = wrapper.toJSON();

      // console.log(tree)

      const { getByTestId, getByText, rerender } = render(<List />);
      await act(async () => {
        // @ts-ignore
        await axios.get.mockResolvedValue(stubbedCustomers);
      });

      expect(getByTestId("table")).toBeInTheDocument();
    });
  });
});
