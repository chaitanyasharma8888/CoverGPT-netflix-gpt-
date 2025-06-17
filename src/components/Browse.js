import React from "react";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";

const Browse = () => {
  // const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  // console.log("user Browse",user.photoURL)

  const playingMovies = useNowPlayingMovies();

  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  // console.log("movies from store", movies);

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
    <div className="relative">
      {/* Video Background - fixed position covering whole screen */}
      <MainContainer />

      {/* Header Bar - fixed at top of screen */}
      <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black to-transparent">
        <div className="flex justify-between items-center p-4 ">
          {/* Left side - Header */}
          <div>
            <Header />
          </div>

          {/* Right side - User info and Sign Out button */}
          <div className="flex items-center space-x-4">
            <img
              className="w-10 h-10 rounded-md"
              src={user.photoURL}
              alt="User profile"
            />
            <h5 className="font-bold text-white">{user.displayName}</h5>
            <button
              className="bg-red-700 hover:bg-red-500 hover:cursor-pointer py-2 px-4 rounded-lg text-white font-bold"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Movie content will be positioned by MainContainer/VideoTitle */}
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
