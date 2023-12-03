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

  function handleNextStep() {
    setStep((s) => s + 1);
  }

  function handlePreviousStep() {
    setStep((s) => s - 1);
  }

  function handleNextCount() {
    setCount((s) => s + 1);
  }

  function handlePreviousCount() {
    setCount((s) => s - 1);
  }

  return (
    <>
      <div className="count">
        <button onClick={handlePreviousStep}>-</button>
        Step: {step}
        <button onClick={handleNextStep}>+</button>
      </div>
      <div className="count">
        <button onClick={handlePreviousCount}>-</button>
        Counter: {count}
        <button onClick={handleNextCount}>+</button>
      </div>
      <div className="count">
        <p>
          {count * step} days from Today is {calculateDate(count * step)}{" "}
        </p>
      </div>
    </>
  );
}

export default Counter;
