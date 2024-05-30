import { useEffect, useState } from "react";

export default function InputHeader({ decimalCounter, setDecimalCounter }) {
  const allowedChars = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  const [selectedNumeralSystem, setSelectedNumeralSystem] = useState(10);
  const [formInputValue, setFormInputValue] = useState(
    decimalCounter.toString(selectedNumeralSystem)
  );

  //updates the formInputValue when the counter is changes by using the buttons in the App.jsx class
  useEffect(() => {
    setFormInputValue(decimalCounter.toString(selectedNumeralSystem));
  }, [decimalCounter]);

  const handleNumeralSystemChange = (numeralSystem) => {
    const number = parseInt(formInputValue, selectedNumeralSystem);
    setFormInputValue(number.toString(numeralSystem));
    setSelectedNumeralSystem(numeralSystem);
    setDecimalCounter(number);
  };

  //handles when the input text field is changed
  const handleFormInputValueChange = (newInputValue) => {
    if (newInputValue == "") {
      newInputValue = "0";
    } //prevents a NaN error
    const isValidInput = checkValidChars(newInputValue);

    if (isValidInput === true) {
      //next 2 lines parses the string to a number and back to remove any zero's at the beginning
      const number = parseInt(newInputValue, selectedNumeralSystem);
      newInputValue = number.toString(selectedNumeralSystem);
      setFormInputValue(newInputValue);
    }

    setDecimalCounter(parseInt(newInputValue, selectedNumeralSystem));
  };

  //checks if the new string only contains valid characters for the currently selected number system
  const checkValidChars = (newInputValue) => {
    const numberString = Array.from(newInputValue.toString());
    const currentAllowedChars = allowedChars.slice(
      undefined,
      selectedNumeralSystem
    );

    const isValid = numberString.every((char) => {
      if (!currentAllowedChars.includes(char)) {
        return false;
      }
      return true;
    });

    return isValid;
  };

  return (
    <div className="w-screen h-28 flex justify-center items-center bg-blue-gray-900">
      <form
        className="w-full h-14
      flex justify-center items-center"
      >
        <input
          className="w-6/12 h-full p-2 m-4 text-4xl rounded-md"
          type="text"
          required
          value={formInputValue}
          onChange={(e) => handleFormInputValueChange(e.target.value)}
        />
      </form>
    </div>
  );
}
