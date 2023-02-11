import React from "react";
import Product from "./Product";

function ProductList({ Products }) {
  return (
    <div className="px-3 pb-4 md:px-5">
      <div className="flex flex-wrap justify-center max-w-full grid-cols-3 md:grid md:gap-4">
        {Products.map(function (item) {
          return <Product key={item.id} {...item} />;
        })}
      </div>
      <div className="flex gap-2 my-4 ml-3">
        <button className="py-2 pl-2 pr-5 text-white border rounded-md bg-primary-500 hover:bg-primary-300 font-bolder">
          1
        </button>
        <button className="py-2 pl-2 pr-5 border rounded-md border-primary-500 hover:bg-primary-300 font-bolder">
          2
        </button>
        <button className="py-2 pl-2 pr-5 border rounded-md border-primary-500 font-bolder hover:bg-primary-300">
          ➮
        </button>
      </div>
    </div>
  );
}

export default ProductList;
