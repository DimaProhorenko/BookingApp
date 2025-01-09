import styled from "styled-components";

export const Container = styled.form`
  max-width: ${({ $maxWidth }) => $maxWidth};
`;

export const Group = styled.div`
  margin-block-end: 1rem;
`;

export const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-block-end: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  display: block;
  outline: none;
  border: 1px solid var(--color-grey-400);
  background-color: transparent;
  border-radius: 5px;
  padding-inline: 0.75rem;
  padding-block: 0.75rem;
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: var(--color-brand-500);
  }

  &:focus {
    outline: none;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  outline: none;
  border: 1px solid var(--color-grey-400);
  background-color: transparent;
  border-radius: 5px;
  padding-inline: 0.75rem;
  padding-block: 0.75rem;
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: var(--color-brand-500);
  }

  &:focus {
    outline: none;
  }
`;

export const Submit = styled.button``;

Container.defaultProps = {
  $maxWidth: "400px",
};
