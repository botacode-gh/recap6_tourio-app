import styled from "styled-components";
import { useState } from "react";
import { StyledButton } from "./StyledButton";

const ModalButtonContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Shroud = styled.div`
  inset: 0;
  background-color: black;
  opacity: 50%;
  position: fixed;
`;

const StyledModal = styled.div`
  position: fixed;
  inset: 10vh 10vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 2rem;
  max-height: 200px;

  ${({ variant }) =>
    variant === "delete" &&
    css`
      background-color: rgb(100, 255, 255);

      /* &:hover {
      }

      &:focus {
      } */
    `}
`;

const StyledPlaceName = styled.span`
  color: rgb(255, 160, 122);
`;

export default function ConfirmDeleteModal({
  handleModalIsVisible,
  deletePlace,
  placeName,
}) {
  return (
    <>
      <Shroud onClick={handleModalIsVisible} />
      <StyledModal>
        <h2>
          Sure you want to delete{" "}
          {placeName ? (
            <StyledPlaceName>{placeName}</StyledPlaceName>
          ) : (
            "the place"
          )}
          ?
        </h2>
        <p>It&apos;ll be gone forever!</p>
        <ModalButtonContainer>
          <StyledButton type="button" onClick={handleModalIsVisible}>
            noo don&apos;t delete it!
          </StyledButton>
          <StyledButton onClick={deletePlace} type="button" variant="delete">
            DELETE IT!
          </StyledButton>
        </ModalButtonContainer>
      </StyledModal>
    </>
  );
}
