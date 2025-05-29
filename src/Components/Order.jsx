import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  gap: 10px;
  padding: 10px 10px;
`;

const InnerDiv = styled.div`
  background-color: black;
  color: white;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`;

const Order = ({ order }) => {
  return (
    <>
      <hr />
      <StyledDiv>
        {order.current.map((val, index) => {
          return <InnerDiv key={index}>{`${val}`}</InnerDiv>;
        })}
      </StyledDiv>
    </>
  );
};

export default Order;
