import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CircularLoader({ value }) {
  const max = 90;
  const percentage = (value.current.length / max) * 100;

  return (
    <div style={{ width: "100%" }}>
      <CircularProgressbar
        value={percentage}
        text={`${value.current.length}/${max}`}
        styles={buildStyles({
          textColor: "black",
          pathColor: "black",
          trailColor: "#e0e0e0",
        })}
      />
    </div>
  );
}

export default CircularLoader;
