import React from "react";
import { Container, Row, Col, StyledAppWrapper } from "./App.style";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Routes from "./Routes";

function App() {
  return (
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
  );
}

export default App;
