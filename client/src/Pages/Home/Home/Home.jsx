import React from "react";
import Categories from "../../../Components/Categories/Categories";
import Filter from "../../../Components/Filter/Filter";
import FilterByRating from "../../../Components/FilterByRating/FilterByRating";
import Price from "../../../Components/Price/Price";
import Sort from "../../../Components/Sort/Sort";
import Stock from "../../../Components/Stock/Stock";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { host } from "../../../Components/Utils/APIRoutes/APIRoutes";
import Spinner from "../../../Components/Spinner/Spinner";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { useState } from "react";

const Home = () => {
  
  const [categories, setCategories] = useState("");
  const [stockChecked, setStockChecked] = useState([]);

  console.log(stockChecked);

  let url = `${host}/product`;

  if (categories) {
    url = url.concat(`?category=${categories}`);
    // console.log(url);
  }

  if (stockChecked.length !== 0) {
    url = url.concat(`&stock[in]=${stockChecked}`);
    console.log(url);
  }

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products", url],
    queryFn: async () => {
      const { data } = await axios.get(url);
      return data.data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    // overflow-auto removes from main and its parent element
    <div className="flex">
      <aside className="h-screen hidden md:block w-4/12 sticky top-6 bg-gray-200 overflow-auto">
        <Categories setCategories={setCategories} />
        <Stock stockChecked={stockChecked} setStockChecked={setStockChecked} />
        <Filter />
        <Price />
        <FilterByRating />
      </aside>
      <main className=" bg-gray-200 w-full h-full">
        <p className="ml-12 mt-10 font-bold">
          total {products?.length} products loaded{" "}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-11/12 h-full">
          {products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
