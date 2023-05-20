import styled from "styled-components";
import { StyledButton } from "./StyledButton.js";
import { useState } from "react";

const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
`;

const Textarea = styled.textarea`
  font-family: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

const HelperText = styled.p`
  font-size: 0.8rem;
  color: #342e5e;
  margin-top: 0.5rem;
`;

export default function Form({ onSubmit, formName, defaultData }) {
  const [showImageHelper, setShowImageHelper] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }

  return (
    <FormContainer aria-labelledby={formName} onSubmit={handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input
        id="name"
        name="name"
        type="text"
        defaultValue={defaultData?.name}
        placeholder="Mount Doom"
        autoFocus
      />
      <Label htmlFor="image-url">Image URL</Label>
      <Input
        id="image-url"
        name="image"
        type="text"
        defaultValue={defaultData?.image}
        placeholder="upload.wikimedia.org/... or images.unsplash.com/..."
        onFocus={() => setShowImageHelper(true)}
        onBlur={() => setShowImageHelper(false)}
      />
      {showImageHelper && (
        <HelperText>
          Only domains from <strong>unsplash.com</strong> and{" "}
          <strong>wikimedia.org</strong> are allowed.
        </HelperText>
      )}
      <Label htmlFor="location">Location</Label>
      <Input
        id="location"
        name="location"
        type="text"
        placeholder="Mordor"
        defaultValue={defaultData?.location}
      />
      <Label htmlFor="map-url">Map URL</Label>
      <Input
        id="map-url"
        name="mapURL"
        type="text"
        placeholder="www.google.com/maps/..."
        defaultValue={defaultData?.mapURL}
      />
      <Label htmlFor="description">Description</Label>
      <Textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        placeholder="Very dry air, lots of lava, not simple to walk into. 8/10."
        defaultValue={defaultData?.description}
      ></Textarea>
      <StyledButton type="submit">
        {defaultData ? "Update place" : "Add place"}
      </StyledButton>
    </FormContainer>
  );
}
