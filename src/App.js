import './App.css';
import { useState } from "react";

function App() {
  const [ count, setCount ] = useState(0);
  const [ step, setStep ] = useState(1);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);
  const reset = () => {
    setCount(0);
    setStep(1);
  }
  return (
    <div className="App">
      <div className="slider">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span> {step}</span>

      </div>
      <div className="counter-container">

        <button
          className="btn"
          onClick={() => setCount((c) => c - step)}
        >-
        </button>

        <h2>Count {count}</h2>
        <button
          className="btn"
          onClick={() => setCount((c) => c + step)}
        >+
        </button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      <button className="btn" onClick={reset}>RESET</button>
    </div>
  );
}

export default App;
