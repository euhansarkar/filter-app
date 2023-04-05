import React from "react";
import { useState } from "react";
import { Range } from "react-range";

const Price = () => {
  const initialValues = [0,  100];
  const [values, setValues] = useState(initialValues);
  const step = 1;
  const min = 0;
  const max = 100;

  // console.log(values);

  const handleChange = (values) => {
    setValues(values);
  };

  return (
    <div className="w-1/2 mx-auto">
      <Range
        values={values}
        step={step}
        min={min}
        max={max}
        onChange={handleChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="h-2 bg-gray-400 rounded-full"
            style={{
              ...props.style,
              height: "2px",
              width: "100%",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="w-6 h-6 bg-blue-500 rounded-full shadow-md"
            style={{
              ...props.style,
              outline: "none",
              marginTop: "-2px",
            }}
          />
        )}
        renderTrackHighlight={({ props }) => (
          <div
            {...props}
            className="h-2 bg-blue-500 rounded-full"
            style={{
              ...props.style,
              height: "2px",
              width: "100%",
            }}
          />
        )}
      />
    </div>
  );
};
export default Price;
