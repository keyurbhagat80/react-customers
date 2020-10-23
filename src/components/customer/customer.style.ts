import styled from "styled-components";

export const StyledH1 = styled.h1`
  margin: 0 0 1rem 0;
  font-size: 2rem;
`;

export const StyledH2 = styled.h2`
  font-size: 1.5rem;
`;

export const StyledTable = styled.table`
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
  thead th {
    border: 1px solid #dee2e6;
    vertical-align: bottom;
    background-color: #f1f1f1;
    padding: 0.5rem;
  }
  tbody td,
  tbody th {
    padding: 0.5rem;
    vertical-align: middle;
    border: 1px solid #dee2e6;
  }
  a {
    color: #000;
    font-weight: 400;
    font-weight: 400;
    border: none;
    text-decoration: none;
    margin-right: 5px;
  }
`;

export const StyledPrimaryButton = styled.button`
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const StyledButtonGroup = styled.div`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  a,
  button {
    position: relative;
    flex: 0 1 auto;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border: 1px solid #000;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    cursor: pointer;
  }
`;

export const StyledFormGroup = styled.div`
  margin-bottom: 1rem;

  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const StyledFormWrapper = styled.div`
  max-width: 500px;
  width: 100%;
`;

export const StyledSpinner = styled.div`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  vertical-align: middle;
  border: 0.25em solid #000;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spinner-border 0.75s linear infinite;
  margin-left: 10px;

  span {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

export const StyledError = styled.div`
  color: red;
  padding-top: 5px;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  label {
    display: inline-flex;
    align-items: center;
    span {
      margin-right: 5px;
    }
  }
`;
