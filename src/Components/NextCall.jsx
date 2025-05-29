import React from "react";
import styled from "styled-components";

const StyledDiv = styled.button`
  background-color: darkolivegreen;
  border: none;
  font-size: 1.3rem;
  color: white;
  height: 30px;
  border-radius: 5px;
`;

const NextCall = ({ arr, setArr, order }) => {
  function handleClick() {
    if (order.current.length === 90) {
      alert("Game has ended");
      return;
    }
    const falseIndexes = arr
      .map((val, index) => (!val ? index : null))
      .filter((index) => index !== null);
    const randomIndex =
      falseIndexes[Math.floor(Math.random() * falseIndexes.length)];
    console.log(randomIndex);
    setArr((prev) => {
      const newArr = [...prev];
      newArr[randomIndex] = true;
      return newArr;
    });
    order.current.push(randomIndex + 1);
  }
  return <StyledDiv onClick={handleClick}>Next call</StyledDiv>;
};

export default NextCall;
