import React from "react";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Browse = () => {
  // const navigate = useNavigate();
  const user = useSelector((store) => store.userReducer);
  // console.log("user Browse",user.photoURL)

  if (!user) return null;
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");//no need to route here we are redirecting from Header onAuthStateChanged listner
      })
      .catch((error) => {
        // An error happened.
        // navigate("/error");
      });
  };

  return (
    <div>
      <div className="display flex justify-between">
        <div>
          <Header />
        </div>
        <div className="display flex justify-evenly m-1">
          <img
            className="w-10 h-10 my-6 rounded-md "
            src={user.photoURL}
            alt="logo"
          />
          <h5 className="my-8 font-bold m-1">{user.displayName}</h5>

          <div>
            <button
              className="bg-red-700 hover:bg-red-500 hover:cursor-pointer py-2 px-10 rounded-lg my-6  text-white font-bold"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
