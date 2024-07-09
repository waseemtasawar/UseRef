import React, { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModel = forwardRef(function ResultModel(
  { targetTime, remaningTime, onReset },
  ref
) {
  const dialog = useRef();
  const userLost = remaningTime <= 0;
  const formatedRemaningTime = (remaningTime / 1000).toFixed(2);
  const score = Math.round((1 - remaningTime / (targetTime * 1000)) * 100);
  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
  }));

  return (
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>you Lost</h2>}
      {!userLost && <h2>your Score : {score}</h2>}
      <p>
        The Target Time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stop the timer with <strong>{formatedRemaningTime}</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button type="submit">Close</button>
      </form>
    </dialog>
  );
});

export default ResultModel;
