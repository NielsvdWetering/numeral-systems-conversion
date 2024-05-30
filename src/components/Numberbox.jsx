import { Button } from "@material-tailwind/react";

export default function NumberBox({ title, value, minusButton, plusButton }) {
  return (
    <div
      className="m-9 w-2/5 text-3xl text-white bg-blue-gray-500 rounded-md drop-shadow-2xl shadow-black
                    flex flex-col"
    >
      <div
        className="text-6xl m-3
                   flex flex-row justify-center items-center"
      >
        <Button
          className="px-5 py-0 m-6 select-none font-Digital7 text-7xl text-purple-800 bg-white rounded-md hover:bg-gray-400"
          onClick={() => minusButton()}
        >
          -
        </Button>
        <span className=" text-6xl m-6">{title}</span>
        <Button
          className="px-5 py-0 m-6 select-none font-Digital7 text-7xl text-purple-800 bg-white rounded-md hover:bg-gray-400"
          onClick={() => plusButton()}
        >
          +
        </Button>
      </div>

      <span className="h-full text-center text-9xl">{value}</span>
    </div>
  );
}
