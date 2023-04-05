import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { host } from "../Utils/APIRoutes/APIRoutes";
import Spinner from "../Spinner/Spinner";

const FilterByRating = () => {
  const [isChecked, setIsChecked] = useState(false);
  const {
    data: ratings,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["ratings"],
    queryFn: async () => {
      const { data } = await axios.get(`${host}/product/ratings`);
      return data.data;
    },
  });

  const uniqueRatings = ratings
    ?.map((rating) => Math.trunc(rating))
    .filter((value, index, arr) => arr.indexOf(value) === index).reverse();

  if (isLoading) {
    return <Spinner />;
  }

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  const loopRating = (rating) => {
    const elements = [];
    for (let i = 0; i <= rating; i++) {
      if (i) {
        elements.push(<BsStarFill className="text-amber-500" />);
      }
    }
    return elements;
  };

  return (
    <div className="w-10/12 mx-auto rounded my-12 bg-white shadow-xl">
      <h2 className="font-bold p-3  text-xl capitalize">shop by categories</h2>
      <hr />

      <form
        action=""
        className="flex pt-2 pb-3 flex-col mx-auto w-9/12 gap-y-3"
      >
        {uniqueRatings.map((rating) => (
          <label htmlFor={rating} className="flex gap-2">
            <input
              type="checkbox"
              id={rating}
              name={rating}
              value={rating}
              onChange={handleCheckboxChange}
            />
            {rating && loopRating(rating)?.map((rating, index) => (rating))}
          </label>
        ))}
      </form>
    </div>
  );
};

export default FilterByRating;
