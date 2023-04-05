import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Spinner from "../Spinner/Spinner";
import { host } from "../Utils/APIRoutes/APIRoutes";
import axios from "axios";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";
import { memo } from "react";

const Stock = ({ stockChecked, setStockChecked }) => {
  
  function onChange(e) {
    console.log(e.target);
    if (e.target.checked) {
      setStockChecked([...stockChecked, e.target.value]);
    } else{
      setStockChecked(stockChecked.filter((checked) => checked !== e.target.value));
    }
  }

  const {
    data: stocks,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["stocks"],
    queryFn: async () => {
      const { data } = await axios.get(`${host}/product/stocks`);
      return data.data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="w-10/12 mx-auto rounded my-12 bg-white shadow-xl">
      <h2 className="font-bold p-3  text-xl capitalize">
        filter by stock status
      </h2>
      <hr />
      <div className="flex pt-2 pb-3 flex-col mx-auto w-9/12">
        {stocks.map((stock, index) => (
          <label key={index}>
            <Checkbox name={stock} onChange={onChange} value={stock} />
            {stock}
          </label>
        ))}
      </div>
    </div>
  );
};

export default memo(Stock);
