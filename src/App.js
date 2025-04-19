import React from "react";
import Motivation from "./Motivation";
import Counter from "./counter";
function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Motivation quote="Never ever give up!" />
      <Counter />
    </div>
  );
}

export default App;
