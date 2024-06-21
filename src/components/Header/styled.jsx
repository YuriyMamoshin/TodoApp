import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 3.75rem;
  width: 43.75rem;
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8125rem 1rem;
  background-color: #ffffff;
  margin-bottom: 2px;
`;

export const StyledHeaderButton = styled.button`
  height: 36px;
  border-radius: 8px;
  padding: 12px, 10px;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  width: 80px;
  background-color: #00ae1c;
  border: none;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    margin-right: 6px;
  }
`;

export const StyledHeaderInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  width: 35.75rem;
`;