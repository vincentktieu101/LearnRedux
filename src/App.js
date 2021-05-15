import React from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "./actions";

function App() {
  // useSelector takes in argument store.state which can be shorthand for state
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div>{counter}</div>
      <button onClick={() => dispatch(actions.increment())}>+</button>
      <button onClick={() => dispatch(actions.decrement())}>-</button>
    </React.Fragment>
  );
}

export default App;
