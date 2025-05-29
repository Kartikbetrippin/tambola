import React from "react";
import styled from "styled-components";

// Styled wrapper
const StyledDiv = styled.div`
  padding: 10px;
`;

const StyledRange = styled.input.attrs({ type: "range" })`
  width: 100%;
  appearance: none;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(to right, white, black);
  outline: none;
  margin-top: 10px;

  &::-webkit-slider-thumb {
    appearance: none;
    height: 16px;
    width: 16px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid black;
  }
`;

const TimeVal = ({ time, setTime }) => {
  return (
    <StyledDiv>
      <StyledRange
        min="1"
        max="10"
        value={time}
        step="1"
        onChange={(e) => setTime(Number(e.target.value))}
      />
    </StyledDiv>
  );
};

export default TimeVal;
