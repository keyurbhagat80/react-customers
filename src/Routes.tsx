import React, { useState, useEffect } from "react";
import axios from "axios";
import { Switch, Route, useLocation } from "react-router-dom";
import List, { Customers } from "./components/customer/List/List";
import Create from "./components/customer/Create/Create";
import EditCustomer from "./components/customer/Edit/Edit";

import Notification from "./components/notification";
import Loader from "./components/Loader";
import { useDispatch } from "react-redux";
import { getAllCustomersSuccess } from "./actions/customersActions";

const Routes: React.FC<{}> = () => {
  const [data, setData] = useState<Customers[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        setLoading(true);
        const response = await axios(`http://localhost:5000/customers`);
        setData(response.data);

        dispatch(getAllCustomersSuccess(response.data));
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };

    if (location.pathname === "/") {
      fetchCustomers();
    }
  }, [location]);

  if (loading) return <Loader />;

  if (error) {
    return (
      <Notification variation={"error"}>
        Customer record not found. Please try again later.
      </Notification>
    );
  }

  return (
    <Switch>
      <Route path={"/"} exact render={(props) => <List list={data} />} />
      <Route path={"/create"} exact component={Create} />
      <Route path={"/edit/:id"} exact component={EditCustomer} />
    </Switch>
  );
};

export default Routes;
