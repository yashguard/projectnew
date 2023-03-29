import React, { useState } from "react";
import "./App.css";

function App() {
  let [state, setState] = useState();
  return (
    <div>
      <div
        className="box"
        style={{
          backgroundColor: `${state}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100vh"
        }}
      >
        <span style={{color:state == "black" ? "white" : "black"}}>Write your favourite color :</span>
        <input  type="text" onChange={(event) => setState(event.target.value)} />
      </div>
    </div>
  );
}

export default App;
