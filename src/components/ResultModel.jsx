import { React, forwardRef, useImperativeHandle, useRef } from "react";

const ResultModel = forwardRef(function ResultModel(
  { targetTime, remaningTime },
  ref
) {
  const dialog = useRef();
  const userLost = remaningTime <= 0;
  const formatedRemaningTime = (remaningTime / 1000).toFixed(2);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    <dialog ref={ref} className="result-modal">
      {userLost && <h2>you Lost</h2>}
      <p>
        The Target Time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stop the timer with <strong>X seconds left.</strong>
      </p>
      <form action="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModel;
