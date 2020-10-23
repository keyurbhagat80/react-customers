import React from "react";
import {
  Container,
  Row,
  Col,
  StyledAppWrapper,
  StyledNav,
  StyledUl
} from "./App.style";

import { Switch, Route, Link } from "react-router-dom";
import List from "./components/customer/List";
import Create from "./components/customer/Create";
import EditCustomer from "./components/customer/Edit";

function App() {
  return (
    <StyledAppWrapper>
      <Container>
        <Row>
          <Col>
            <StyledNav>
              <StyledUl>
                <li>
                  <Link to={"/"}> Home </Link>
                </li>
                <li>
                  <Link to={"/create"}> Create Customer </Link>
                </li>
              </StyledUl>
            </StyledNav>

            <Switch>
              <Route path={"/"} exact component={List} />
              <Route path={"/create"} exact component={Create} />
              <Route path={"/edit/:id"} exact component={EditCustomer} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </StyledAppWrapper>
  );
}

export default App;
