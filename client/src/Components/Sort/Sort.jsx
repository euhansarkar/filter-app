import React from "react";
import { useState } from "react";

const Sort = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="w-10/12 mx-auto rounded my-12 bg-white shadow-xl">
      <h2 className="font-bold p-3  text-xl capitalize">shop by categories</h2>
      <hr />

      <form action="" className="flex pt-2 pb-3 flex-col mx-auto ml-10">
        <label htmlFor="option1">
          <input
            type="radio"
            id="option1"
            name="options"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
          />
          Option 1
        </label>

        <label htmlFor="option2">
          <input
            type="radio"
            id="option2"
            name="options"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
          />
          Option 2
        </label>

        <label htmlFor="option3">
          <input
            type="radio"
            id="option3"
            name="options"
            value="option3"
            checked={selectedOption === "option3"}
            onChange={handleOptionChange}
          />
          Option 3
        </label>
      </form>
    </div>
  );
};

export default Sort;
