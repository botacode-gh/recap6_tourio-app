import styled from "styled-components";
import Card from "../components/Card.js";
import useSWR from "swr";
import Link from "next/link.js";
import { StyledLink } from "../components/StyledLink.js";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-left: 0;
`;

const ListItem = styled.li`
  position: relative;
  width: 100%;
  max-width: 800px;
`;
const FixedLink = styled(StyledLink)`
  position: fixed;
  bottom: 50px;
  right: 22vw;

  opacity: 0.8;
  &:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    right: 10vw;
  }

  @media (width: 1440px) {
    right: 25vw;
  }

  @media (min-width: 2560px) {
    bottom: 8vw;
    right: 37vw;
  }
`;
export default function Home() {
  const { data } = useSWR("/api/places", { fallbackData: [] });

  return (
    <>
      <List role="list">
        {data.map((place) => {
          return (
            <ListItem key={place._id}>
              <Card
                name={place.name}
                image={place.image}
                location={place.location}
                id={place._id}
              />
            </ListItem>
          );
        })}
      </List>
      <Link href="/create" passHref legacyBehavior>
        <FixedLink>+ place</FixedLink>
      </Link>
    </>
  );
}
