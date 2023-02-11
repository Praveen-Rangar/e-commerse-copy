// import { withFormik } from "formik";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
// import * as Yup from "yup";
// import Input from "./Input";
// import axios from "axios";
// import Withuser from "./Withuser";
// import WithAlert from "./WithAlert";

function SignUpPage() {
  const signupSubmit = (values) => {
    console.log(
      "kjxgcjhvcjhfgxjh",
      values.fullname,
      values.email,
      values.password
    );
  };

  const schema = Yup.object().shape({
    fullname: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(10).required(),
  });

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },
    onSubmit: signupSubmit,
    validationSchema: schema,
  });

  return (
    <>
      <div className="w-full h-full md:mx-10 md:mt-28 mx-1.5 mt-10  bg-white md:px-[100px] md:py-[80px]">
        <form onSubmit={formik.handleSubmit} className="px-4 py-5">
          <h1 className="text-[25px] text-gray-500 font-semibold">Sign-Up</h1>
          <div className="rounded-md w-full h-full border border-gray-50 p-[20px] mt-[30px] ">
            <div className="text-[13.5px] text-gray-500 font-semibold md:leading-[27px]">
              <div className="p-[3px] mb-[6px]">
                <h3>
                  fullName <span className="text-primary-500">*</span>
                </h3>
                <label htmlFor="fullname" className="sr-only">
                  fullname
                </label>
                <input
                  value={formik.values.fullname}
                  onChange={formik.handleChange}
                  id="fullname"
                  name="fullname"
                  type="text"
                  onBlur={formik.handleBlur}
                  className="outline-none p-[11.5px] md:h-[46px]  w-full border border-gray-200 rounded-md"
                />
                {formik.touched.fullname && formik.errors.fullname && (
                  <div className="text-sm text-primary-700">
                    {formik.errors.fullname}
                  </div>
                )}
              </div>

              <div className="p-[3px] mb-[6px]">
                <h3>
                  email address <span className="text-primary-500">*</span>
                </h3>
                <label htmlFor="email" className="sr-only">
                  email
                </label>
                <input
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  id="email"
                  name="email"
                  type="email"
                  onBlur={formik.handleBlur}
                  className="outline-none p-[11.5px] md:h-[46px]  w-full border border-gray-200 rounded-md"
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-sm text-primary-700">
                    {formik.errors.email}
                  </div>
                )}
              </div>

              <div className="p-[3px] mb-[6px]">
                <h3>
                  password <span className="text-primary-500">*</span>
                </h3>
                <label htmlFor="password" className="sr-only">
                  password
                </label>
                <input
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  id="password"
                  name="password"
                  type="password"
                  onBlur={formik.handleBlur}
                  className="outline-none p-[11.5px] md:h-[46px]  w-full border border-gray-200 rounded-md"
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="text-sm text-primary-700">
                    {formik.errors.password}
                  </div>
                )}
              </div>

              <div className="p-[3px] mb-[6px]">
                <div className="flex items-center space-x-[4px] ">
                  <input type="checkbox" className="h-[13px] w-[13px] " />
                  <h3>Remember me</h3>
                </div>
                <button
                  type="submit"
                  className="disabled:bg-500  px-[40px] py-[8px] text-[15px] rounded-md text-white font-semibold bg-primary-500"
                >
                  Sign Up
                </button>{" "}
                <button
                  disabled={!formik.isValid}
                  onClick={formik.resetForm}
                  type="submit"
                  className="disabled:bg-gray-700  px-[40px] py-[8px] text-[15px] rounded-md text-white font-semibold bg-primary-500"
                >
                  reset
                </button>{" "}
              </div>

              <div className="flex">
                <span className=" text-gray-300 text-[15px] font-normal md:mr-1.5">
                  Already have an account? please
                </span>
                <Link
                  to={"/LoginPage"}
                  className="hover:underline text-primary-500 text-[18px] font-normal md:mr-20"
                >
                  {" "}
                  Log-In ?
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUpPage;
