import React,{useEffect} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {useNavigate} from "react-router-dom"

const Header = () => {
   const dispatch = useDispatch();
   const navigate=useNavigate();

   //note:: when header component loads this onAuthStateChanged listens and check auth everytime
  useEffect(() => {//we are writing this inside header because we want to  use Navigate hook(and navigate hook only use inside router component so Header is commom place which is always present and also in router (route provider)other we we use navigate outside router it gives error)
    //when ever page loaded inn app this listener loaded too and each time it's checking the auth of user i.e checking the authentication of user if user is login the store will be setup and it user is not logged in the action will be dispatch remove user(see else statement)
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      //It listens for changes in the user's authentication state (sign-in, sign-out, token refresh).It automatically detects if a user is already logged in when the app loads (using stored credentials like cookies or local storage).It provides immediate updates whenever the authentication state changes.
      if (user) {
        //sign in case (user is object where we will get many details like email,display name)
        console.log(user);
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        ); //we are putting or adding this data into the store
        navigate("/browse")
      } else {
        //sign out case
        dispatch(removeUser()); //no need to pass anything because we are removing user from store
        navigate("/")
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute px-8 py-4 bg-transparent z-10 ">
      <img
        className="w-36"
        src="https://static.vecteezy.com/system/resources/thumbnails/035/512/573/small_2x/circular-golden-leaf-branches-award-frame-logo-design-luxury-gold-wreath-png.png"
        alt="logo"
      />
    </div>
  );
};

export default Header;
