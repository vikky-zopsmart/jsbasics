import React, { useState } from "react";
import "./styles.css";
const TimerComponent = () => {
  const [num, setNum] = useState(0);
  const [intervals, setIntervals] = useState(0);
  const [isActive, setIsActive] = useState(true);

  function start() {
    setIsActive(!isActive);

    if (isActive) {
      let interval = setInterval(function () {
        setNum((num) => num + 1);
      }, 1000);
      setIntervals(interval);
    } else {
      stop();
    }
  }

  const stop = () => {
    clearInterval(intervals);
  };
  const reset = () => {
    stop();
    setNum(0);
    if (isActive === false) {
      setIsActive(!isActive);
    }
  };

  return (
    <div className="container">
      <h2>function base</h2>
      <div className="wrapper">
        <h1>
          {Math.floor(num / 60) < 10
            ? "0" + Math.floor(num / 60)
            : Math.floor(num / 60)}
          :{num % 60 < 10 ? "0" + (num % 60) : num % 60}
        </h1>
        <button className="btn1" onClick={start}>
          {!isActive ? "Stop" : "Start"}
        </button>
        <button className="btn2" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default TimerComponent;
