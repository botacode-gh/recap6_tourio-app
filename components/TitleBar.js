import styled from "styled-components";

const Headline = styled.h1`
  top: 0;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 20px;
  color: black;
  text-align: center;
`;

export default function TitleBar() {
  return <Headline>Tourio</Headline>;
}
