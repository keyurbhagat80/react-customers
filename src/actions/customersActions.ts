import { GET_CUSTOMERS_DATA_SUCCESS } from "../reducers/customers";

const GET_ALL_CUSTOMERS = "GET_ALL_CUSTOMERS";

export const getAllCustomers = () => {
  return {
    type: GET_ALL_CUSTOMERS
  };
};

export const getAllCustomersSuccess = (data: any) => {
  return {
    type: GET_CUSTOMERS_DATA_SUCCESS,
    payload: data
  };
};
