export const initialState = {
  move: "x",
  board: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  timer: 0,
};

function findWinner(board) {
  const strat = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];

  let sums = strat.map((r) => {
    let s = r.map(([x, y]) => board[x][y]);
    return s.reduce((a, b) => a + b);
  });
  //   console.log(sums);

  if (Math.max(...sums) === 3) return "x";
  if (Math.min(...sums) === -3) return "o";

  return null;
}

export function tttReducer(state, action) {
  if (action?.type === "pressed") {
    let value = state.move === "x" ? 1 : -1;
    let newBoard = structuredClone(state.board); //.map((r) => r.map((c) => c));
    newBoard[action.x][action.y] = value;

    // console.log("Bal bla");
    let newMove = state.move === "x" ? "o" : "x";
    return {
      ...state,
      move: newMove,
      board: newBoard,
      winner: findWinner(newBoard),
      timer: 0,
    };
  }

  if (action?.type === "restart") {
    return {
      ...initialState,
    };
  }

  if (action?.type === "timer") {
    let newTime = state.timer + 1;
    let newMove = state.move === "x" ? "o" : "x";

    if (newTime > 15) {
      return {
        ...state,
        move: newMove,
        timer: 0,
      };
    } else {
      return {
        ...state,
        timer: newTime,
      };
    }
  }

  return state;
}
