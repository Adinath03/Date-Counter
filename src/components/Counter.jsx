import { useState } from "react";

function calculateDate(offset) {
  const currentDate = new Date();
  const targetDate = new Date(currentDate);
  targetDate.setDate(currentDate.getDate() + offset);

  const formatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = targetDate.toLocaleDateString("en-US", formatOptions);

  return formattedDate;
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  function handleReset() {
    setStep(0);
    setCount(0);
  }
  return (
    <>
      <div className="count">
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        Step: {step}
      </div>
      <div className="count">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          placeholder={count}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div className="count">
        <p>
          {count * step} days from Today is {calculateDate(count * step)}{" "}
        </p>
      </div>
      {count != 0 && (
        <div className="count">
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </>
  );
}

export default Counter;
