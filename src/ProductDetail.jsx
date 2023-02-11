import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import Loading from "./Loading";
import { getProductData } from "./Api";
import NotFound from "./NotFound";

function ProductDetail({ onAddToCart }) {
  const params = useParams();
  const id = +params.id;

  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);
  console.log("count", count);
  useEffect(
    function () {
      const promise = getProductData(id);
      promise
        .then(function (product) {
          setProduct(product);
          setLoading(false);
        })
        .catch(function () {
          setLoading(false);
        });
    },
    [id]
  );

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <NotFound />;
  }
  function handleCountChange() {
    setCount(+event.target.value);
  }
  function handleButtonClick() {
    onAddToCart(id, count);
    setCount(1);
  }
  return (
    <div>
      <Link to="/" className="mt-3 ml-3 text-3xl font-extrabold">
        <HiArrowLeft />
        Back
      </Link>
      <div className="px-2 py-5 my-4 md:w-screen md:py-9 md:px-16 bg-gray-50">
        <div className="bg-white">
          <div className="flex">
            <img className="w-56 md:h-64" src={product.thumbnail} />

            <div className="pl-3 md:pl-6 md:mt-3">
              <h1 className="mt-2 text-2xl font-bold text-gray-900">
                {product.title}
              </h1>
              <h1 className="text-xl font-bold">Rs.{product.price}</h1>
              <h1>{product.description}</h1>
              <div className="flex gap-2">
                <input
                  value={count}
                  onChange={handleCountChange}
                  type="number"
                  placeholder="1"
                  className="w-10 py-1 pl-1 pr-3 border rounded-md border-primary-700"
                />
                <button
                  onClick={handleButtonClick}
                  className="px-5 py-1 text-white border rounded-md border-primary-500 bg-primary-500"
                >
                  ADD TO CART
                </button>
              </div>

              <div className="flex items-center justify-between max-w-full mt-12 md:pr-20">
                <div>
                  {id > 1 && (
                    <Link
                      to={"/products/" + (id - 1)}
                      className=" h-8 px-3 py-0.5  text-primary-500 font-semibold rounded border-2 border-primary-500 hover:text-white hover:bg-primary-500"
                    >
                      Previous
                    </Link>
                  )}{" "}
                </div>
                <div>
                  {id < 30 && (
                    <Link
                      to={"/products/" + (id + 1)}
                      className=" h-8 px-3 py-0.5  text-primary-500 font-semibold rounded border-2 border-primary-500 hover:text-white hover:bg-primary-500"
                    >
                      Next
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
