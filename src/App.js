import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "./actions";

function App() {
  const [value, setValue] = useState();
  // useSelector takes in argument store.state which can be shorthand for state
  const counter = useSelector((state) => state.counter);
  // useDisplay returns store.dispatch()
  const dispatch = useDispatch();

  return (
    <div id="container" style={{ margin: "0 20px" }}>
      <h1>{counter}</h1>
      <div>
        <button
          onClick={() => dispatch(actions.increment())}
          style={{ fontSize: "48px" }}
        >
          +
        </button>{" "}
        <button
          onClick={() => dispatch(actions.decrement())}
          style={{ fontSize: "48px" }}
        >
          -
        </button>
      </div>
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(actions.set(Number(value)));
        }}
      >
        <div>Set to Custom Number</div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />{" "}
        <button
          type="submit"
          onClick={() => dispatch(actions.set(Number(value)))}
        >
          SET
        </button>
      </form>
    </div>
  );
}

export default App;
