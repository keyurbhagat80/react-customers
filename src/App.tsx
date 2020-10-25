import React from "react";
import { Container, Row, Col, StyledAppWrapper } from "./App.style";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Routes from "./Routes";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StyledAppWrapper>
          <Container>
            <Row>
              <Col>
                <Navbar />
                <Routes />
              </Col>
            </Row>
          </Container>
        </StyledAppWrapper>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
