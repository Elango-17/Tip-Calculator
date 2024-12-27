import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [per1, setPer1] = useState(0);
  const [per2, setPer2] = useState(0);

  const tip = bill * ((per1 + per2) / 2 / 100);

  function handleReset() {
    setBill(0);
    setPer1(0);
    setPer2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage per={per1} onSelect={setPer1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage per={per2} onSelect={setPer2}>
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />{" "}
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
function SelectPercentage({ children, per, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select value={per} onChange={(e) => onSelect(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okey (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay {bill + tip} (Rs: {bill} + Rs: {tip} tip)
    </h3>
  );
}
function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
