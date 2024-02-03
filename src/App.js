import "./styles.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Board } from "./board";

export default function App() {
  let move = useSelector((state) => {
    return state.move;
  });
  let time = useSelector((state) => {
    return state.timer;
  });
  let board = useSelector((state) => {
    return state.board;
  });
  let winner = useSelector((state) => {
    return state.winner;
  });

  let dispatch = useDispatch();

  let onClick = () => {
    dispatch({ type: "restart" });
  };

  useEffect(() => {
    const t = setTimeout(() => {
      dispatch({
        type: "timer",
      });
    }, 1000);
    return () => {
      clearTimeout(t);
    };
  });

  return (
    <div className="App">
      <h1>OX OX</h1>
      <h2>Następny ruch: {move}</h2>
      <h2>{15 - time} [s]</h2>
      {winner ? <p>Zwycięzca: {winner}</p> : ""}
      <button onClick={onClick}>Restart</button>
      <Board board={board} winner={winner} />
    </div>
  );
}
