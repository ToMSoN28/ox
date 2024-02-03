import { useDispatch } from "react-redux";

export function Board({ board, winner }) {
  const dispatch = useDispatch();
  const onButton = (x, y) => {
    if (!winner) {
      // console.log(x, y);
      dispatch({
        type: "pressed",
        x,
        y,
      });
    }
  };
  return (
    <table style={{ margin: "auto", textAlign: "center", paddingTop: "10px" }}>
      <tbody>
        {board.map((r, ir) => (
          <tr key={ir}>
            {r.map((c, ic) => (
              <td
                style={{
                  border: "1px solid black",
                  width: "25px",
                  height: "25px",
                }}
                key={ic}
              >
                {c > 0 ? (
                  "x"
                ) : c < 0 ? (
                  "o"
                ) : (
                  <button onClick={() => onButton(ir, ic)} disabled={winner}>
                    ..
                  </button>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
