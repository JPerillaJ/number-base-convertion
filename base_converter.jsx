import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [fromBase, setFromBase] = useState(10);
  const [toBase, setToBase] = useState(10);
  const [result, setResult] = useState("");

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleFromBaseChange = (event) => {
    setFromBase(parseInt(event.target.value));
  };

  const handleToBaseChange = (event) => {
    setToBase(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setResult(convertNumber(number, fromBase, toBase));
  };

  const convertNumber = (number, fromBase, toBase) => {
    const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";

    // Convert number to base 10
    let base10 = 0;
    for (let i = 0; i < number.length; i++) {
      let digitValue = digits.indexOf(number.charAt(i));
      base10 += digitValue * Math.pow(fromBase, number.length - 1 - i);
    }

    // Convert base 10 to destination base
    while (base10 > 0) {
      let remainder = base10 % toBase;
      result = digits.charAt(remainder) + result;
      base10 = Math.floor(base10 / toBase);
    }

    return result || "0";
  };

  return (
    <div>
      <h1>Number Base Converter</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Number:
          <input type="text" value={number} onChange={handleNumberChange} />
        </label>
        <br />
        <label>
          From base:
          <select value={fromBase} onChange={handleFromBaseChange}>
            <option value="2">Binary</option>
            <option value="8">Octal</option>
            <option value="10">Decimal</option>
            <option value="16">Hexadecimal</option>
          </select>
        </label>
        <br />
        <label>
          To base:
          <select value={toBase} onChange={handleToBaseChange}>
            <option value="2">Binary</option>
            <option value="8">Octal</option>
            <option value="10">Decimal</option>
            <option value="16">Hexadecimal</option>
          </select>
        </label>
        <br />
        <button type="submit">Convert</button>
      </form>
      <p>Result: {result}</p>
    </div>
  );
}

export default App;
