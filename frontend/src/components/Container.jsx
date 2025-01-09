import React from "react";
import styled from "styled-components";

const Div = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const Container = ({ children }) => {
  return <Div>{children}</Div>;
};

export default Container;
