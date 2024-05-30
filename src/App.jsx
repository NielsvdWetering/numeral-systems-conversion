import { useEffect, useState } from "react";
import "./App.css";
import InputHeader from "./components/InputHeader";
import NumberBox from "./components/Numberbox";

export default function App() {
  const [decimalCounter, setDecimalCounter] = useState(0);

  const plusButton = () => {
    setDecimalCounter(decimalCounter + 1);
  };

  const minusButton = () => {
    setDecimalCounter(decimalCounter - 1);
  };

  useEffect(() => {}, [plusButton, minusButton]);

  return (
    <div className="w-screen h-screen flex flex-col items-center font-Digital7">
      <InputHeader
        decimalCounter={decimalCounter}
        setDecimalCounter={setDecimalCounter}
      />
      <div
        className=" bg-blue-gray-800 w-screen h-svh
                    flex justify-center flex-wrap"
      >
        <NumberBox
          title="Decimal"
          value={decimalCounter}
          minusButton={minusButton}
          plusButton={plusButton}
        />
        <NumberBox
          title="Binary"
          value={decimalCounter.toString(2)}
          minusButton={minusButton}
          plusButton={plusButton}
        />
        <NumberBox
          title="Octal"
          value={decimalCounter.toString(8)}
          minusButton={minusButton}
          plusButton={plusButton}
        />
        <NumberBox
          title="Hexadecimal"
          value={decimalCounter.toString(16)}
          minusButton={minusButton}
          plusButton={plusButton}
        />
      </div>
    </div>
  );
}
