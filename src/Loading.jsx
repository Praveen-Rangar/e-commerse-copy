import React from "react";
import { ImSpinner9 } from "react-icons/im";

function Loading() {
  return (
    <div className="flex justify-center font-semibold text-7xl text-primary-500">
      <ImSpinner9 className="animate-spin" />{" "}
    </div>
  );
}

export default Loading;