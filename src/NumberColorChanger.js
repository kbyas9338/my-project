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
    <div className="container py-4">
      <div className="card mx-auto shadow-sm" style={{ maxWidth: "400px" }}>
        <div className="card-body text-center">
          <h5 className="card-title mb-3">🔢 Number Color Changer</h5>

          <div className="mb-3">
            <label htmlFor="numberInput" className="form-label">
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
              className="form-control text-center"
            />
          </div>

          <div
            className="rounded d-flex align-items-center justify-content-center mx-auto"
            style={{
              width: "100%",
              maxWidth: "200px",
              height: "100px",
              backgroundColor: currentColor || "#555",
              color: currentColor === "yellow" ? "black" : "white",
              fontSize: "1.5rem",
              transition: "background-color 0.3s ease",
            }}
          >
            {inputValue && currentColor ? inputValue : "No Color"}
          </div>
        </div>
      </div>
    </div>
  );
}
