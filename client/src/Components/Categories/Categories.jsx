import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import Spinner from "../Spinner/Spinner";
import { host } from "../Utils/APIRoutes/APIRoutes";
import { memo } from "react";

const Categories = ({setCategories}) => { 
  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await axios.get(`${host}/product/categories`);
      return data.data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }


  const handleOptionChange = (event) => {
    // console.log(event.target.value);
    setCategories(event.target.value);
  };


  return (
    <div className="w-10/12 mx-auto rounded my-12 bg-white shadow-xl">
      <h2 className="font-bold p-3  text-xl capitalize">filter by categories</h2>
      <hr />

      <form action="" className="flex pt-2 pb-3 flex-col mx-auto ml-10">
        {categories.map((category, index) => {
          return (
            <label key={index} htmlFor={category}>
              <input
                type="radio"
                id={category}
                name="category_name"
                value={category}
                // checked={selectedOption === { category }}
                onChange={handleOptionChange}
              />
              {category}
            </label>
          );
        })}
      </form>
    </div>
  );
};

export default memo(Categories);
