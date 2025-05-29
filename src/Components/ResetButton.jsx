import React from "react";
import styled from "styled-components";

const StyledDiv = styled.button`
  background-color: black;
  border: none;
  height: 25px;
  color: white;
  font-size: 1.3rem;
  width: 100%;
  border-radius: 5px;
`;

const ResetButton = ({ setArr, order }) => {
  return (
    <StyledDiv
      onClick={() =>
        setArr(() => {
          order.current = [];
          return new Array(90).fill(false);
        })
      }
    >
      Reset
    </StyledDiv>
  );
};

export default ResetButton;
