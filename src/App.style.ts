import styled from "styled-components";

export const StyledAppWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  @media (min-width: 576px) {
    margin: 2rem;
  }
`;

export const Container = styled.div`
  @media (min-width: 768px) {
    width: 100%;
    max-width: 1248px;
  }
  @media (max-width: 575px) {
    width: 100%;
    padding: 0 20px;
    margin: 0;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Col = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  @media (min-width: 993px) {
    padding: 1rem 0;
    flex: 0 0 83.33%;
    max-width: 83.33%;
  }
  @media (max-width: 576px) {
    padding: 0.5rem 0;
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export const StyledH1 = styled.h1`
  margin: 0 0 1rem 0;
  font-size: 2rem;
`;

export const StyledNav = styled.nav`
  padding: 0.5rem 1rem;
  background: #f9f8f8;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const StyledUl = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: row;

  li {
    displau: list-item;
  }

  a {
    display: block;
    padding: 0 1rem;
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;
