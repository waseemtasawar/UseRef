import React, { useRef, useState } from "react";
import ResultModel from "./ResultModel";

const TimerChallenge = ({ title, targetTime }) => {
  const [timeRemaning, setTimeRemaning] = useState(targetTime * 1000);
  const timer = useRef();
  const dialog = useRef();
  const timerIsActive = timeRemaning > 0 && timeRemaning < targetTime * 1000;

  if (timeRemaning <= 0) {
    clearInterval(timer.current);

    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaning(targetTime * 1000);
  }
  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaning((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModel
        ref={dialog}
        targetTime={targetTime}
        remaningTime={timeRemaning}
        onReset={handleReset}
      />

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? " Time is Running ..." : " Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
