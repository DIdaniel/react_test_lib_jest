import React, { useState } from "react";
// import "./App.css";

function App() {
  const [btnColor, setBtnColor] = useState("red");
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = btnColor === "red" ? "blue" : "red";

  const clickHandler = () => {
    setBtnColor(newButtonColor);
  };

  return (
    <div className="App">
      <button
        style={{ backgroundColor: btnColor, color: "#fff" }}
        onClick={clickHandler}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <br />
      <input
        type="checkbox"
        id="enable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="enable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
