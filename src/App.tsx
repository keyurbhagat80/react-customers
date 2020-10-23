import React from "react";
import { Container, Row, Col, StyledAppWrapper } from "./App.style";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import List from "./components/customer/List/List";
import Create from "./components/customer/Create/Create";
import EditCustomer from "./components/customer/Edit/Edit";
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <StyledAppWrapper>
        <Container>
          <Row>
            <Col>
              <Navbar />
              <Switch>
                <Route path={"/"} exact component={List} />
                <Route path={"/create"} exact component={Create} />
                <Route path={"/edit/:id"} exact component={EditCustomer} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </StyledAppWrapper>
    </BrowserRouter>
  );
}

export default App;
