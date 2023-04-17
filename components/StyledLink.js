import styled, { css } from "styled-components";

export const StyledLink = styled.a`
  background-color: #cc8062;
  padding: 0.8rem 1.5rem;
  border-radius: 0.6rem;
  color: black;
  text-decoration: none;
  font-weight: bold;

  &:focus {
    color: white;
    background-color: rgb(255, 160, 122);
  }

  ${({ justifySelf }) =>
    justifySelf &&
    css`
      justify-self: ${justifySelf};
    `}

  ${({ variant }) =>
    variant === "outlined" &&
    css`
      text-align: center;
      background-color: white;
      border: 3px solid #cc8062;
    `}
`;
