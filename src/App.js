import React from "react";
import CounterContainer from "./containers/CounterContainer";
import TodoContainer from "./containers/TodoContainer";

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <hr />
      <TodoContainer />
    </div>
  );
}

export default App;
