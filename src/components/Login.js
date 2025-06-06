import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const toggleSignForm = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_large.jpg"
          alt="logo"
          className="absolute z-9"
        />
      </div>
      <div className="py-16 w-1/2  rounded-lg  mx-auto left-0 right-0">
        {/* <h2>Sign In</h2> */}
        <form className="bg-black bg-opacity-80 50 relative z-8 mx-36 py-24 display flex flex-col text-white ">
          <h1 className="font-extrabold py-2 mx-20">
            {isSignInForm ? "Sign In" : "Sign Out"}
          </h1>
          {isSignInForm ? (
            ""
          ) : (
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 m-2 rounded-lg mx-20 bg-transparent border border-white"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="p-3 m-2 rounded-lg mx-20 bg-transparent border border-white"
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 m-2 rounded-lg mx-20 bg-transparent border border-white"
          />

          <button className="bg-red-700 hover:bg-red-500 hover:cursor-pointer py-2 px-16 rounded-lg mx-20 my-6">
            {isSignInForm ? "Sign In" : "Sign Out"}
          </button>
          <p
            className="my-6 mx-20 hover:cursor-pointer text-center hover:text-gray-400"
            onClick={toggleSignForm}
          >
            {isSignInForm
              ? "New to Netflix ? Sign up now."
              : "Already register? Sign in now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
