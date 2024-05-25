import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebaseConfig";

export const SignUp = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  function handleSubmitForm(e) {
    e.preventDefault();

    // Creating an object of user credentials
    const userInfo = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
    };

    // Cleanup the input fields
    name.current.value = "";
    email.current.value = "";
    password.current.value = "";

    // Storing the userInfo into the localStorge
    localStorage.setItem("userCredentials", JSON.stringify(userInfo));
    alert("Your account has been created Login now");
    navigate("/login");
  }

  //   function to toggle the password
  function handleTogglePassword(e) {
    e.preventDefault();

    setShow(!show);
  }

  // Function to make the popup
  async function signInWithGoogle() {
    // Create the popup
    const result = await signInWithPopup(auth, googleProvider);

    // All of the info that we need from the user credentials
    const authInfo = {
      userId: result.user.uid,
      name: result.user.displayName,
      photoURL: result.user.photoURL,
      isAuth: true,
    };

    // Storing the necessary info into localstorage so that we can use it among diff pages also user will not get logged out after refresh
    localStorage.setItem("auth", JSON.stringify(authInfo));

    // Navigate to home page after login
    navigate("/home");
  }

  // if (isAuth) {
  //   <Navigate to="/react-expense-tracker/expense-tracker" />;
  // }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="shadow-md bg-white p-10 space-y-5 rounded-lg lg:w-4/12 min-w-11">
        <h2 className="font-semibold text-xl text-center">
          Create a secure account
        </h2>

        <form action="" className="space-y-5">
          <div className="flex flex-col">
            <label className="font-semibold">Name</label>
            <input
              type="text"
              name="name"
              ref={name}
              className="border border-violet-600 px-2 py-1 rounded-md focus:outline-violet-600 focus:outline-double"
            />
          </div>
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
            <div className="w-full flex border border-violet-600 rounded-md focus:outline-violet-600 focus:outline-double px-1">
              <input
                type={`${show === true ? "text" : "password"}`}
                name="password"
                ref={password}
                className="px-2 py-1 focus:outline-none flex-1"
              />
              <button
                onClick={handleTogglePassword}
                className="inline-block text-sm text-violet-700 font-medium active:underline pr-2"
              >
                {`${show === true ? "Hide" : "Show"}`}
              </button>
            </div>
          </div>

          <button
            type="submit"
            onClick={handleSubmitForm}
            className="bg-violet-600 w-full py-2 text-white active:bg-violet-600 md:hover:bg-violet-700 md:active:bg-violet-500 rounded-lg font-semibold"
          >
            Create account
          </button>
          <div className="flex justify-center gap-x-2">
            Already have an account?{" "}
            <p className="text-violet-700 font-semibold hover:underline cursor-pointer">
              <Link to="/login">Login here</Link>
            </p>
          </div>
        </form>
        <h2 className="font-semibold text-lg text-gray-500 text-center">or</h2>
        <button
          onClick={signInWithGoogle}
          className="bg-violet-200 border border-violet-600 w-full py-2 text-violet-600 hover:bg-violet-100 rounded-lg font-semibold flex items-center gap-x-3 justify-center hover:underline"
        >
          <img src="images/google.svg" alt="Google Icon" className="w-8" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};
