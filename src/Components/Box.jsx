import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: ${({ $value, $latest }) => {
    if ($value) {
      if ($latest) {
        return "darkolivegreen";
      }
      return "black";
    } else return "white";
  }};

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

const Box = ({ value, index, order }) => {
  const latest = index + 1 === order.current[order.current.length - 1];
  return (
    <StyledDiv $value={value} $latest={latest}>
      <p>{index + 1}</p>
    </StyledDiv>
  );
};

export default Box;
