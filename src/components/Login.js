import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth"; //from firebase

import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const toggleSignForm = () => {
    setisSignInForm(!isSignInForm);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = (e) => {
    //validate the form data

    e.preventDefault();

    const nameData = isSignInForm ? "" : name.current.value;
    const emailData = email.current.value;
    const passwordData = password.current.value;

    const message = checkValidData(
      { nameData, emailData, passwordData },
      isSignInForm
    );
    setErrorMessage(message);
    if (message) return; //means if message (error ) is present I want to return i.e don't go ahead

    //sign in  and sign up logic below

    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(auth, emailData, passwordData)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          //ONCE SIGN IN I.E USER IS successfully registered and then update the profile(i.e displayName,photoURL) in Firebasw(Use Firebase Update API)
          updateProfile(user, {
            //here it's not updating even we update values (kind of bug )in depth basically (we are putting values Name,password,Gmail from form and when click on sign up button that time store is updated but that time displayname,phoo url is not there and after that we are dispatching the data(i.e use firebase API) where we update value i.e display name,photoURL, SO THAT'S WHY IT'S NOT UPdating first time in store because update firebase API call after create user (in which we are updating displayname, photourl) SO SOLUTION FOR THAT is dispatch action to store after update the displayName, photourl so that store have all updated values/data this time including displayName,photourl)
            displayName: nameData,
            photoURL:
              "https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg", //I not used this
          })
            .then(() => {
              // Profile updated! successfully we have to dispatch action and update the store again with updated values
              const { uid, email, displayName, photoURL } = auth.currentUser; //not use user(because user don't have updated value and this time we will want a new updated value which auth have which comes from getAuth() function)
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //sign in logic

      signInWithEmailAndPassword(auth, emailData, passwordData)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
          alt="logo"
          className="absolute z-9 w-screen h-screen"
        />
      </div>
      <div className="py-16 w-1/2  rounded-lg  mx-auto left-0 right-0">
        {/* <h2>Sign In</h2> */}
        <form className="bg-black bg-opacity-50 50 relative z-8 mx-36 py-24 display flex flex-col text-white rounded-xl border-2 border-red-600 ">
          <h1 className="font-extrabold py-2 mx-20">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {isSignInForm ? (
            ""
          ) : (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-3 m-2 rounded-lg mx-20 bg-transparent border border-white"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-3 m-2 rounded-lg mx-20 bg-transparent border border-white"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 m-2 rounded-lg mx-20 bg-transparent border border-white"
          />
          {
            <p className="p-3 mx-[70px] text-red-600 font-bold">
              {errorMessage}
            </p>
          }
          <button
            className="bg-red-700 hover:bg-red-500 hover:cursor-pointer py-2 px-16 rounded-lg mx-20 my-2"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Out"}
          </button>
          <p className="my-3 mx-12  text-center hover:text-gray-300 font-extrabold">
            <span onClick={toggleSignForm} className="hover:cursor-pointer">
              {isSignInForm
                ? "New to Cover ? Sign up now."
                : "Already register? Sign in now."}
            </span>
            </p>
            <br />
            <span className=" text-center font-extrabold">“DEMO ONLY - No data collection occurs”</span>
          
          {/* <p className="my-6 mx-20 hover:cursor-pointer text-center hover:text-gray-400">“DEMO ONLY - No data collection occurs”.</p> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
