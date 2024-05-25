import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { googleImage } from "../../public/images/google.svg";
// import { useGetAuth } from "../hooks/useGetAuth";

export const Login = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  // Exporting user credentials from localstorage
  const userInfo = JSON.parse(localStorage.getItem("userCredentials"));

  function handleLogin(e) {
    e.preventDefault();

    if (
      userInfo.email === email.current.value &&
      userInfo.password === password.current.value
    ) {
      navigate("/home");
    } else {
      alert("Email or password is Incorrect");
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="shadow-md bg-white p-10 space-y-5 rounded-lg lg:w-4/12 min-w-11">
        <h2 className="font-semibold text-lg text-center">Log In</h2>

        <form action="" className="space-y-5">
          <div className="flex flex-col">
            <label className="font-semibold">Email</label>
            <input
              type="email"
              name="email"
              ref={email}
              className="border border-violet-600 px-2 py-1 rounded-md focus:outline-violet-600 focus:outline-double"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold ">Password</label>
            <input
              type="password"
              name="password"
              ref={password}
              className="border border-violet-600 px-2 py-1 rounded-md focus:outline-violet-600 focus:outline-double"
            />
          </div>
          <button
            type="submit"
            onClick={handleLogin}
            className="bg-violet-600 w-full py-2 text-white active:bg-violet-600 md:hover:bg-violet-700 md:active:bg-violet-500 rounded-lg font-semibold"
          >
            Login
          </button>
          <div className="flex justify-center gap-x-2">
            Don't have an account?{" "}
            <p className="text-violet-700 font-semibold hover:underline cursor-pointer">
              <Link to="/signup">Create one</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
