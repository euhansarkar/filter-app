import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { host } from "../Utils/APIRoutes/APIRoutes";
import axios from "axios";
import Spinner from "../Spinner/Spinner";

const Filter = () => {
  const [isChecked, setIsChecked] = useState(false);

  const {
    data: colors,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["colors"],
    queryFn: async () => {
      const { data } = await axios.get(`${host}/product/colors`);
      return data.data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  return (
    <div className="w-10/12 mx-auto rounded my-12 bg-white shadow-xl">
      <h2 className="font-bold p-3  text-xl capitalize">filter by colors</h2>
      <hr />

      <form action="" className="flex pt-2 pb-3 flex-col mx-auto w-9/12">
        {colors.map((color, index) => (
          <label htmlFor={color} key={index}>
            <input
              type="checkbox"
              id={color}
              name={color}
              value={color}
              onChange={handleCheckboxChange}
            />
            {color}
          </label>
        ))}

      </form>
    </div>
  );
};

export default Filter;
