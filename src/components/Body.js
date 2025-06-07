import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
// import "../App.css";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {//It listens for changes in the user's authentication state (sign-in, sign-out, token refresh).It automatically detects if a user is already logged in when the app loads (using stored credentials like cookies or local storage).It provides immediate updates whenever the authentication state changes.
      if (user) {
        //sign in case (user is object where we will get many details like email,display name)
console.log(user);
        const { uid, email, displayName,photoURL } = user
        dispatch(addUser( {uid: uid, email: email, displayName: displayName ,photoURL:photoURL})); //we are putting or adding this data into the store
      } else {
        //sign out case
        dispatch(removeUser()); //no need to pass anything because we are removing user from store
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
