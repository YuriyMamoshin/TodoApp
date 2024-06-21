import styled from "styled-components";

export const StyledCheckbox = styled.article`
  padding: 16px;
  position: relative;

  & label {
    display: block;
    height: 12px;
    width: 12px;

    & input {
      opacity: 0;
      position: absolute;
      left: 12px;
    }

    & img {
      width: 12px;
      margin-right: 10px;
    }
  }
`;
