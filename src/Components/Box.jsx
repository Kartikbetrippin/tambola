import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: ${({ $value }) => (!$value ? "white" : "black")};
  color: ${({ $value }) => (!$value ? "black" : "white")};
  border: 1px solid black;
  border-radius: 4px;
  text-align: center;
  font-family: "Roboto Mono", monospace;
  font-weight: 600;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = ({ value, index }) => {
  return (
    <StyledDiv $value={value}>
      <p>{index + 1}</p>
    </StyledDiv>
  );
};

export default Box;
