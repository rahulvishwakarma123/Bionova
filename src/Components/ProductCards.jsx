import React from "react";

const ProductCards = ({ image, product }) => {
  return (
    <div className="group relative h-44 w-56 cursor-pointer overflow-hidden rounded-2xl border-2 border-purple-700 bg-white shadow-lg duration-300 hover:-translate-y-4 hover:bg-purple-50 hover:shadow-2xl max-lg:h-20 max-lg:w-35">
      <img
        className="h-3/4 w-full bg-amber-400 object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-90"
        src={image}
        alt="productImage"
      />
      {/* Optional: decorative gradient overlay for subtlety */}
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-purple-400 via-purple-300 to-purple-100 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
      <p className="flex h-1/4 items-center justify-center bg-purple-800 text-xl font-semibold text-white transition-colors duration-300 group-hover:bg-purple-700 max-lg:text-sm max-lg:font-normal">
        {product}
      </p>
    </div>
  );
};

export default ProductCards;
