import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-wrap justify-center space-x-5 md:py-20">
      <div className="pr-10 space-y-5 ">
        <h1 className="pt-10 text-5xl font-semibold text-primary-500 ">
          Page Couldn't Found!
        </h1>
        <h3 className="text-3xl text-gray-500 ">
          The Page You Are Looking For Doesn't Exist
        </h3>
        <div className="flex ">
          <Link
            to="/"
            className="px-6 py-2 font-semibold text-white bg-primary-500 rounded-2xl"
          >
            Back To Home
          </Link>
        </div>
      </div>

      <div className="">
        <img
          src="https://img.freepik.com/premium-vector/human-skull-drawing_454371-257.jpg?w=740"
          className="max-w-[250px] mix-blend-multiply animate-bounce"
        />
      </div>
    </div>
  );
}

export default NotFound;
