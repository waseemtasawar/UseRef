import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredName, setenteredName] = useState("");

  function HandleClick() {
    setenteredName(playerName.current.value);
    playerName.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {enteredName ? enteredName : "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={HandleClick}>Set Name</button>
      </p>
    </section>
  );
}
