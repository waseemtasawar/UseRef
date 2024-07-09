import { React, forwardRef } from "react";

const ResultModel = forwardRef(function ResultModel(
  { result, targetTime },
  ref
) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>your {result}</h2>
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
