import { createStore } from "redux";
import { tttReducer, initialState } from "./reducer";

const tttStore = createStore(tttReducer, initialState);
export default tttStore;
