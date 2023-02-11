import React from "react";

function NoMatching() {
  return (
    <div className="flex flex-wrap justify-center space-x-5 md:py-20">
      <div className="pr-10 space-y-5 ">
        <h1 className="pt-10 text-5xl font-semibold text-primary-500 ">
          Product Couldn't Found!
        </h1>
        <h3 className="text-3xl text-gray-500 ">
          The Product You Are Looking For Doesn't Exist
        </h3>
        
      </div>

      <div className="">
        <img
          src="https://img.freepik.com/premium-vector/human-skull-drawing_454371-257.jpg?w=740"
          className="max-w-[200px] mix-blend-multiply animate-bounce"
        />
      </div>
    </div>
  );
}
export default NoMatching;