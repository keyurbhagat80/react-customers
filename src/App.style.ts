import styled from "styled-components";

export const StyledAppWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
`;

export const Container = styled.div`
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  margin-left: 2rem;
  margin-right: 2rem;
  @media (min-width: 1328px) {
    max-width: 1248px;
  }
  @media (min-width: 993px) {
    max-width: 1248px;
  }
  @media (min-width: 768px) {
    max-width: 1248px;
  }
  @media (max-width: 575px) {
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
  @media (min-width: 768px) {
    padding: 1rem 0;
    flex: 0 0 83.33%;
    max-width: 83.33%;
  }
  @media (max-width: 767px) {
    padding: 0.5rem 0;
    flex: 0 0 100%;
    max-width: 100%;
  }
`;
