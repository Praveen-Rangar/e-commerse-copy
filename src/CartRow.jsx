import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { getProductData } from "./Api";

function CartRow({ item }) {
  const [data, setdata] = useState({});

  useEffect(() => {
    console.log("item", item);
    getProductData(item).then((Response) => setdata(Response));
  }, [item]);

  console.log("data.quantity", data.quantity);

  return (
    <div className="flex flex-row items-center max-w-full px-6 py-4 space-x-10 font-semibold text-gray-500 border border-b-gray-100 border-x-gray-100">
      <MdDelete className="text-3xl text-gray-300 cursor-pointer hover:text-primary-500" />
      <div className="w-20 h-16">
        <img
          className="object-cover w-full h-full rounded-md mix-blend-multiply"
          src={data.thumbnail}
        />
      </div>
      <span className="pl-5 font-bold grow text-primary-500"></span>
      <div className="flex items-center space-x-[87px]">
        <span className="w-12 ">${data.price}</span>
        <input
          value={data.quantity}
          type="number"
          min="1"
          className="w-12 p-2 border border-gray-200 rounded text-bold"
        />
        <span className="w-20">10.00</span>{" "}
      </div>
    </div>
  );
}

export default CartRow;
