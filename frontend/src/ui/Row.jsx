import styled from "styled-components";

const Row = styled.div`
  display: flex;
  gap: ${({ $gap }) => $gap};
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ $direction }) => $direction};
`;

Row.defaultProps = {
  $gap: "10px",
  $direction: "row",
};

export default Row;
