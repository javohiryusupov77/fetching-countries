import React, { useReducer } from "react";
import ColorDisplay from "./colorDisplay";
import ColorControls from "./ColorControl";
import "./App.css";

const initialState = { red: 0, green: 0, blue: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        [action.color]: Math.min(state[action.color] + action.amount, 255),
      };
    case "DECREMENT":
      return {
        ...state,
        [action.color]: Math.max(state[action.color] - action.amount, 0),
      };
    case "RESET":
      return initialState;
    default:
      throw new Error("Unknown action type");
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <ColorDisplay red={state.red} green={state.green} blue={state.blue} />
      <ColorControls color="red" dispatch={dispatch} />
      <ColorControls color="green" dispatch={dispatch} />
      <ColorControls color="blue" dispatch={dispatch} />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default App;
