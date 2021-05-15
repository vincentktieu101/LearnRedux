import React from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "./actions";

function App() {
  // useSelector takes in argument store.state which can be shorthand for state
  const counter = useSelector((state) => state.counter);
  // useDisplay returns store.dispatch()
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div>{counter}</div>
      <button onClick={() => dispatch(actions.increment())}>+</button>
      <button onClick={() => dispatch(actions.decrement())}>-</button>
      <button onClick={() => dispatch(actions.set(5))}>SET 5</button>
    </React.Fragment>
  );
}

export default App;
