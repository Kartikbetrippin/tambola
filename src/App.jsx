import React, { useState, useEffect, useRef } from "react";
import Board from "./Components/Board";
import Button from "./Components/Button";
import Order from "./Components/Order";
import useAuto from "./Hooks/useAuto";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const App = () => {
  const [timer, setTimer] = useState(4);

  const [arr, setArr] = useState(() => new Array(90).fill(false));
  const [auto, setAuto, returnOrder] = useAuto(arr, setArr, timer);

  return (
    <>
      <StyledDiv>
        <Button
          val={auto}
          setVal={setAuto}
          timer={timer}
          setTimer={setTimer}
          setArr={setArr}
          order={returnOrder}
          arr={arr}
        />
        <Board arr={arr} setArr={setArr} order={returnOrder} />
      </StyledDiv>

      <Order order={returnOrder} />
    </>
  );
};

export default App;
