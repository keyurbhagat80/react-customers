import styled from "styled-components";

export const StyledNav = styled.nav`
  padding: 0.5rem 1rem;
  background: #f2f2f2;
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
