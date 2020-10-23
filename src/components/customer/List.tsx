import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { StyledH2, StyledTable, StyledButtonGroup } from "./customer.style";
import { Container, StyledH1 } from "../../App.style";

interface Customers {
  id: number;
  firstName: string;
  lastName: string;
  dob: string;
}
interface IState {
  customers: Customers[];
}

const List: React.FC<{ IState: IState }> = () => {
  const [customers, setCustomers] = useState<Customers[]>([]);

  const getCutomersList = () => {
    axios.get(`http://localhost:5000/customers`).then((data) => {
      setCustomers(data.data);
    });
  };

  useEffect(() => {
    getCutomersList();
  }, []);

  const deleteCustomer = (id: number) => {
    axios.delete(`http://localhost:5000/customers/${id}`).then((data) => {
      const index = customers.findIndex((customer) => customer.id === id);
      customers.splice(index, 1);
      // get new data from db
      //   getCutomersList();
    });
  };

  return (
    <div>
      <StyledH1>Dashboard</StyledH1>
      {customers.length === 0 && (
        <StyledH2>No customer found at the moment</StyledH2>
      )}

      {customers.length > 0 && (
        <Container>
          <StyledTable>
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
        </Container>
      )}
    </div>
  );
};

export default List;
