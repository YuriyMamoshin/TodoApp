import styled from "styled-components";

export const StyledTodoInput = styled.input`
  border: none;
  outline: none;
  width: 550px;
  background-color: transparent;
  padding-left: 1rem;
  border-left: 1px solid #dedfe5;
  grid-area: tt;
  resize: none;
  font-family: "Inter", sans-serif;
  font-size: 0.9375rem;
  grid-area: tt;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
`;

export const StyledTodoItem = styled.li`
  width: 41.75rem;
  min-height: 3rem;
  margin: 1rem auto 0;
  border: 1px solid #dedfe5;
  border-radius: 8px;
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 3rem 1fr 5rem;
  grid-template-areas: "ch tt ct";

  & button {
    display: none;
  }

  &:hover {
    background-color: #efefef;

    & button {
      display: block;
    }
  }

  & input[type="checkbox"] {
    grid-area: ch;
  }

  & aside {
    grid-area: ct;
    display: flex;
    justify-content: flex-end;
    align-self: center;
  }
`;
