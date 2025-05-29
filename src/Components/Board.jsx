import React from "react";
import Box from "./Box";
import styled from "styled-components";

const StyledDiv = styled.div`
  flex: 4;

  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(10, 1fr);
  padding: 16px;
  gap: 4px;
`;

const Board = ({ arr, setArr, order }) => {
  return (
    <StyledDiv>
      {arr.map((val, index) => (
        <Box key={index} index={index} value={val} order={order} />
      ))}
    </StyledDiv>
  );
};

export default Board;
