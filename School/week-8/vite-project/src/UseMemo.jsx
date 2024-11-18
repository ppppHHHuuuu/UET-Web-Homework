import { useMemo, useState } from "react";
import { Button, Input } from "antd";

export default function UseMemo() {
  const [number, setNumber] = useState(1);
  const [show, setShow] = useState(true);

  // Function that simulates a heavy calculation
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += num;
    }
    return result;
  };

  // Memoizing the result of the expensive calculation
  const memoizedValue = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]);

  return (
    <div>
      <h3>UseMemo Example</h3>
      <h3>Sum 1 to 1000000000 using UseMemo</h3>
      <Input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        placeholder="Enter a number"
      />
      <div>
        <p>Expensive Calculation Result: {memoizedValue}</p>
      </div>
      <Button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Result
      </Button>
    </div>
  );
}
