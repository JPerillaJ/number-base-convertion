import React, { useState } from "react";
import BasicTable from './CalculationTable.js';
import './styles/App.css';

function App() {
  const [number, setNumber] = useState("");
  const [fromBase, setFromBase] = useState(10);
  const [toBase, setToBase] = useState(16);
  const [result, setResult] = useState("");
  const [table, setTable] = useState("");

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

  function createData(division, quotient, remainder, digit) {
    return { division, quotient, remainder, digit };
  }

  const convertNumber = (number, fromBase, toBase) => {
    const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";

    // Convert number to base 10
    let base = 0;
    for (let i = 0; i < number.length; i++) {
      let digitValue = digits.indexOf(number.charAt(i));
      base += digitValue * Math.pow(fromBase, number.length - 1 - i);
    }

    let division_steps = []
    // Convert base 10 to destination base
    while (base > 0) {
      let remainder = base % toBase;
      division_steps.push(createData(base+"/"+toBase, Math.floor(base/toBase), digits.charAt(remainder), ""))
      result = digits.charAt(remainder) + result;
      base = Math.floor(base / toBase);
    }
    setTable(renderTable(division_steps))
    return result || "0";
  };

  const renderTable = (rows) => {
    return <BasicTable rows={rows}/>
  }

  return (
    <div class="base-conversion-container">
      <div class="panel">
        <div class="panel-title">
          <h1>Number Base Converter</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            Number:
            <input type="text" value={number} onChange={handleNumberChange} />
          </label>
          <div class="base-selection-panel">
            <div class="from-base-dropdown">
              <label>
                From base:
                <select value={fromBase} onChange={handleFromBaseChange}>
                  <option value="2">2 - Binary</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8 - Octal</option>
                  <option value="9">9</option>
                  <option value="10">10 - Decimal</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16 - Hexadecimal</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                  <option value="32">32</option>
                  <option value="33">33</option>
                  <option value="34">34</option>
                  <option value="35">35</option>
                  <option value="36">36</option>
                </select>
              </label>
            </div>
            <div class="to-base-dropdown">
              <label>
                To base:
                <select value={toBase} onChange={handleToBaseChange}>
                  <option value="2">2 - Binary</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8 - Octal</option>
                  <option value="9">9</option>
                  <option value="10">10 - Decimal</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16 - Hexadecimal</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                  <option value="32">32</option>
                  <option value="33">33</option>
                  <option value="34">34</option>
                  <option value="35">35</option>
                  <option value="36">36</option>
                </select>
              </label>
            </div>
          </div>  
          <button class="convert-button" type="submit">= Convert</button>
        </form>
        <div class="result-panel">
          <label>
            Result:
            <input type="text" value={result} disabled/>
          </label>
        </div>
        <div>
          {table}
        </div>
      </div>
    </div>
  );
}

export default App;
