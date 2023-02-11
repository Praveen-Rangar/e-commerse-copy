import React from "react";
import CartRow from "./CartRow";

function CartList({ cart }) {
  console.log("cart", cart);

  const cartId = Object.keys(cart);
  console.log("cartId", cartId);
  

  return (
    <div>
      <div className="w-full h-full ">
        <div className="flex items-center justify-between w-full h-16 font-semibold text-gray-500 bg-gray-100 border border-gray-200">
          <div className="w-20 px-56">Product</div>
          <div className="flex px-16 space-x-16">
            <p>Price</p>
            <p className="">Quantity</p>
            <p>Subtotal</p>
          </div>
        </div>
        {cartId.map((item) => (
          <CartRow item={item} key={item.keys} />
        ))}

        <div className="flex items-center justify-between w-full h-20 border border-b-gray-200 border-x-gray-200">
          <div className="flex px-4 space-x-5">
            <input
              className="w-40 h-8 px-2 border border-gray-500"
              placeholder="Counpon code"
              type="text"
            />
            <button className="h-8 text-white rounded w-44 bg-primary-500 hover:bg-primary-700">
              APPLY COUPON
            </button>
          </div>
          <div className="flex px-4 ">
            <button className="h-8 text-white rounded w-44 bg-primary-500 hover:bg-primary-700">
              UPDATE CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartList;
