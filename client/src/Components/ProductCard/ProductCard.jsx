import React from "react";

const ProductCard = ({ product }) => {
  const { name, src, price, color } = product;
  return (
    <div className="w-64 bg-white shadow-md rounded-lg overflow-hidden my-4">
      <img
        className="w-full h-48 object-cover"
        src={src}
        alt={name}
      />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{name}</h2>
        <div className="flex items-center justify-between">
          <p className="text-gray-800 font-bold text-xl">${price}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
