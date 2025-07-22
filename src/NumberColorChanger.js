import React, { useState } from "react";

export default function NumberColorChanger() {
  const [inputValue, setInputValue] = useState("");

  const numberToColor = {
    1: "red",
    2: "green",
    3: "blue",
    4: "yellow",
    5: "orange",
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const numericValue = Number(value);
    if (value === "" || (numericValue >= 1 && numericValue <= 5)) {
      setInputValue(value);
    }
  };

  const currentColor = numberToColor[Number(inputValue)];

  return (
    <div className="container2">
      <label htmlFor="numberInput" className="label">
        Enter a number (1–5):
      </label>
      <input
        id="numberInput"
        type="number"
        min="1"
        max="5"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter number 1 to 5"
        className="input"
      />

      <div
        className="color-box"
        style={{
          backgroundColor: currentColor || "#555",
          color: currentColor === "yellow" ? "black" : "white",
        }}
      >
        {inputValue && currentColor ? inputValue : "No Color"}
      </div>
    </div>
  );
}
