import React from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

function LoginPage() {
  const handleLoginSubmit = () => {
    console.log("vazxnz");
  };

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(10).required(),
  });

  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    dirty,
    isValid,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleLoginSubmit,
    validationSchema: schema,
  });

  return (
    <>
      <div className="w-full h-full md:mx-10 md:mt-28 mx-1.5 mt-10  bg-white md:px-[100px] md:py-[80px]">
        <form onSubmit={handleSubmit} className="px-4 py-">
          <h1 className="text-[25px] text-gray-500 font-semibold">Login</h1>
          <div className="rounded-md w-full h-full border border-gray-50 p-[20px] mt-[30px] ">
            <div className="text-[13.5px] text-gray-500 font-semibold md:leading-[27px]">
              <div className="p-[3px] mb-[6px]">
                <h3>
                  Username or email address{" "}
                  <span className="text-primary-500">*</span>
                </h3>
                <input
                  className="outline-none p-[11.5px] md:h-[46px]  w-full border border-gray-200 rounded-md"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email or Username"
                />
                {touched.email && errors.email && (
                  <div className="text-primary-700">{errors.email}</div>
                )}
              </div>

              <div className="p-[3px] mb-[6px]">
                <h3>
                  Password <span className="text-primary-500">*</span>
                </h3>
                <input
                  className="outline-none p-[11.5px] md:h-[46px]  w-full border border-gray-200 rounded-md"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                />
                {dirty && touched.password && errors.password && (
                  <div className="text-primary-700">{errors.password}</div>
                )}
              </div>
              <div className="p-[3px] mb-[6px]">
                <div className="flex items-center space-x-[4px] ">
                  <input type="checkbox" className="h-[13px] w-[13px] " />
                  <h3>Remember me</h3>
                </div>
                <button
                  disabled={!dirty && !isValid}
                  type="submit"
                  className=" disabled:bg-gray-500  px-[40px] py-[8px] text-[15px] rounded-md text-white font-semibold bg-primary-500"
                >
                  LOG IN
                </button>{" "}
              </div>
              <div className="flex justify-between ">
                <Link
                  to={"/ForgotPassword"}
                  className="hover:underline text-primary-500 text-[15px] font-normal"
                >
                  Lost your password ?{" "}
                </Link>
                <div className="flex">
                  <span className=" text-gray-300 text-[15px] font-normal md:mr-1.5">
                    Don't have an account? please
                  </span>
                  <Link
                    to={"/SignUpPage"}
                    className="hover:underline text-primary-500   text-[18px] font-normal md:mr-20"
                  >
                    {" "}
                    Sign-Up ?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
