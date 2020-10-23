import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  StyledH2,
  StyledTable,
  StyledButtonGroup,
  StyledHeader,
  StyledH1,
  StyledInput
} from "../customer.style";
import { executeSearch } from "../customer.utils";
import Notification from "../../notification";

export interface Customers {
  id: number;
  firstName: string;
  lastName: string;
  dob: string;
}

export const getAllCustomers = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/customers`);
    return response;
  } catch (err) {
    return err;
  }
};

const List: React.FC<{}> = () => {
  const [originalCustomers, setOriginalCustomers] = useState<Customers[]>([]);
  const [customers, setCustomers] = useState<Customers[]>([]);
  const [getCustomerError, setGetCustomerError] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState("");
  const [deleteSuccess, setDeleteSuccess] = useState<boolean>(false);
  const [deleteError, setDeleteError] = useState<boolean>(false);

  const getCutomersList = async () => {
    const { data } = await getAllCustomers();
    if (data) {
      setCustomers(data);
      setOriginalCustomers(data);
    } else {
      setGetCustomerError(true);
    }
  };

  useEffect(() => {
    getCutomersList();
  }, []);

  const deleteCustomer = (id: number) => {
    axios
      .delete(`http://localhost:5000/customers/${id}`)
      .then((data) => {
        const index = customers.findIndex((customer) => customer.id === id);
        customers.splice(index, 1);
        setDeleteSuccess(true);
        // get new data from db
        //   getCutomersList();
      })
      .catch((err) => {
        setDeleteError(true);
      });
  };

  useEffect(() => {
    if (deleteSuccess) {
      setTimeout(() => {
        setDeleteSuccess(false);
      }, 1500);
    }

    if (deleteError) {
      setTimeout(() => {
        setDeleteError(false);
      }, 1500);
    }
  }, [deleteError, deleteSuccess]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;

    setSearchValue(searchText);
  };

  useEffect(() => {
    if (searchValue !== "") {
      const searchResults = executeSearch(searchValue, originalCustomers);

      if (searchResults.length > 0) {
        setCustomers(searchResults);
      }
    } else {
      setCustomers(originalCustomers);
    }
  }, [searchValue, originalCustomers]);

  if (getCustomerError) {
    return (
      <Notification variation={"error"}>
        Customer record not found. Please try again later.
      </Notification>
    );
  }

  return (
    <div>
      <StyledHeader>
        <StyledH1>Dashboard</StyledH1>
        <label>
          <span>Search</span>
          <StyledInput
            type="text"
            data-testid="search"
            onChange={(e) => handleSearch(e)}
            name="search"
            placeholder="search customers"
          />
        </label>
      </StyledHeader>

      {(customers.length === 0 || setCustomers.length === 0) && (
        <StyledH2>No customer found at the moment</StyledH2>
      )}

      {deleteSuccess && (
        <Notification variation={"success"}>
          Customer record deleted successfully!
        </Notification>
      )}

      {deleteError && (
        <Notification variation={"error"}>
          Customer record not deleted. Please try again later.
        </Notification>
      )}

      {customers.length > 0 && (
        <StyledTable data-testid="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">DOB</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers &&
              customers.map((customer) => (
                <tr key={customer.id}>
                  <th scope="row">{customer.id}</th>
                  <td>{customer.firstName}</td>
                  <td>{customer.lastName}</td>
                  <td>{customer.dob}</td>
                  <td>
                    <StyledButtonGroup>
                      <Link to={`edit/${customer.id}`}>Update Customer </Link>
                      <button onClick={() => deleteCustomer(customer.id)}>
                        Delete Customer
                      </button>
                    </StyledButtonGroup>
                  </td>
                </tr>
              ))}
          </tbody>
        </StyledTable>
      )}
    </div>
  );
};

export default List;
