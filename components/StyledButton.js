import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  background-color: rgb(255, 160, 122);
  padding: 0.8rem;
  border-radius: 0.6rem;
  color: black;
  text-decoration: none;
  font-weight: bold;
  border: 2px solid rgb(255, 160, 122);
  font-size: inherit;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    color: white;
    background-color: #7ad9ff;
    border-style: dashed;
  }

  ${({ variant }) =>
    variant === "delete" &&
    css`
      background-color: #e36969;
      color: white;
      border: 2px solid #e36969;

      &:hover {
        background-color: #d83131;
        border: 2px solid #d83131;
      }

      &:focus {
        background-color: white;
        color: #d83131;
        border: 2px dashed #d83131;
      }
    `}
`;
