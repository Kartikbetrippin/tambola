import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import TimeVal from "./TimeVal";
import ResetButton from "./ResetButton";
import CircularLoader from "./CircularLoader";

const StyledDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 16px 10px;
`;

const StyledBtn = styled.button`
  height: 32px;
  width: 100%;

  color: black;
  font-weight: bold;
  cursor: pointer;
  border: none;
  background-image: linear-gradient(to right, green, green, white);
  background-size: 200% 100%; /* zoomed in horizontally */
  background-position: ${({ $percent }) => 100 - $percent}% 0;
  transition: background-position 0.1s linear;
  border-radius: 5px;
`;

const Button = ({ val, setVal, setTimer, timer, setArr, order }) => {
  const timeSpent = useRef(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (val) {
      const interval = setInterval(() => {
        timeSpent.current = timeSpent.current + 100;
        setProgress((old) => timeSpent.current / timer / 10);
        console.log(progress);

        if (timeSpent.current / 1000 == timer) {
          console.log(`reached the timer ${timeSpent.current}`);
          timeSpent.current = 0;
          return;
        }
      }, 100);

      return () => {
        timeSpent.current = 0;
        return clearInterval(interval);
      };
    }
  }, [timer, val]);

  return (
    <StyledDiv>
      <CircularLoader value={order} />
      <div>
        <StyledBtn $percent={progress} onClick={() => setVal((old) => !old)}>
          {val ? "Stop" : "Start"} {timer}s
        </StyledBtn>
        <TimeVal time={timer} setTime={setTimer} />
        <ResetButton setArr={setArr} order={order} />
      </div>
    </StyledDiv>
  );
};

export default Button;
