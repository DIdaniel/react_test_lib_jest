import React, { useState } from "react";
import "./App.css";

function App() {
  const [btnColor, setBtnColor] = useState("red");
  const newButtonColor = btnColor === "red" ? "blue" : "red";

  const clickHandler = () => {
    setBtnColor(newButtonColor);
  };

  console.log(`Change to ${newButtonColor}`);

  return (
    <div className="App">
      <button style={{ backgroundColor: btnColor }} onClick={clickHandler}>
        Change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;
