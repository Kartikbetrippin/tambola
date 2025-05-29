import React, { useState, useRef, useEffect } from "react";
function useAuto(arr, setArr, time) {
  const [auto, setAuto] = useState(false);
  const arrRef = useRef(arr);
  const order = useRef([]);
  time = time * 1000;
  useEffect(() => {
    arrRef.current = arr;
  }, [arr]);

  useEffect(() => {
    if (auto) {
      const interval = setInterval(() => {
        const falseIndexes = arrRef.current
          .map((value, index) => (!value ? index : null))
          .filter((i) => i !== null);

        if (falseIndexes.length === 0) {
          clearInterval(interval);
          setAuto(() => false);
          alert("the game ended");
          return;
        }

        const randomIndex =
          falseIndexes[Math.floor(Math.random() * falseIndexes.length)];
        order.current.push(randomIndex + 1);

        setArr((prev) => {
          const newArr = [...prev];
          newArr[randomIndex] = true;
          return newArr;
        });
      }, time);

      return () => clearInterval(interval);
    }
  }, [auto, time]);
  return [auto, setAuto, order];
}
export default useAuto;
