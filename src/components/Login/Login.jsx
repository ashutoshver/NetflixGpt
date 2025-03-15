import React, { useState } from "react";
import Header from "../Header/Header.jsx";
import { ImageUrl } from "../../utils/constant/ImageUrl.js";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div>
      <Header />
      <div className="relative w-full h-screen">
        <img
          className="object-cover w-full h-full"
          src={ImageUrl.BANNER_LOGO}
          alt="banner-logo"
        />
      </div>
      <form
        className="absolute text-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-3/12 bg-black/70 px-6 py-10 rounded-lg shadow-lg"
      >
        <h1 className="font-bold text-3xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
          <input
          type="text"
          placeholder="Enter Full Name"
          className="p-4 my-2 w-full rounded-md border-none outline-none bg-gray-800 text-white"
        />
        )}
        <input
          type="email"
          placeholder="Enter Email"
          className="p-4 my-2 w-full rounded-md border-none outline-none bg-gray-800 text-white"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="p-4 my-2 w-full rounded-md border-none outline-none bg-gray-800 text-white"
        />
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold p-3 rounded-md my-3 w-full">
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4">
          {isSignInForm ? "New to Netflix?" : "Already have an account?"}
          
          <span className="font-bold cursor-pointer ml-1" onClick={toggleSignUpForm}>
            
            {isSignInForm ? "Sign Up Now" : "Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
