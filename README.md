{/*

--------Video 14 ------- (05-06-2025)

APP features--
-->when logout
    -->show login/sigup page
    then it will take to or redirect to browser page
-->When login (broswer page)
    -->Header
    -->main movie
      -->(trailer in background)
      -->title and description
      -->movie suggestions
         -->movieLists*N
-->NetflixGPt
    -->search bar
    -->movie suggestions     

1::
-->Scaffolding the app (create react app)
    -->create-react-app netflix-gpt
    -->Creates a basic folder structure already
    -->already have bundler with it called webpack(like parcel)
    -->Already have testing library with it called (jest)
    -->Alreday have HMR(Hot module replacement is already there) i.e save code files it automatically referesh in UI
    -->Remove extra things and starts creating your project

2::
-->install tailwind // setup tailwind (configure tailwind css)
    -->npm install -D tailwindcss or npm install -D tailwindcss postcss autoprefixer or npm install -g tailwindcss
    -->npx tailwindcss init (if not working)  creates a manual tailwind.config.js at root level and paste
        module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
    ],
    theme: {
    extend: {},
    },
     plugins: [],
    }

    -->inside index.css file
    add this
    @tailwind base;
    @tailwind components;
    @tailwind utilities;   

NOTE:: configure the tailwind css is very important (debuuging if not working)  
install tailwind intellisence for suggestion  

3::
-->Configure github and push all code there


4::
Install
ES7+ React/Redux/React-Native snippets extension for rafce (boiler plate)

5::
Install (react-router-dom)
-->npm i -D react-router-dom
-->configure react router to app and provide routes


6::
-->created Header Icon of Netflix
   className:"bg-gradient-to-b from-black" ---->background gradient to bottom -->(gives kind of black shadow to background from top to bottom)

7::
-->created login form   
-->implement CSS

8::
-->created a sign up form (NOTE:: converted same sign in form to sign out form via ternary conditioning)
-->implement CSS


--------Video 14 ------- (06-06-2025)

9::
For form validation use(Formik Library if required) and useRef hook
    -->Form Validation
    -->By two ways 
    1)useState hook (state variables) 
    2)useRef (use ref for that)
        import React, { useState ,useRef} from "react";
         const email=useRef(null);

    Note:: use e.preventDefault() to prevent the default behavious of form submission i.e inside form it basically calls the onSubmit method of form so it refreshes again and again after button click so to prevent that behaviour we uses e.preventDefault()  

    e.g
    <input
            ref={email}   //here this takes reference of input if you console it shows as a object in console
            type="text"
            placeholder="Email Address"
            className="p-3 m-2 rounded-lg mx-20 bg-transparent border border-white"
          />

   ---------date 07/06/2025------------

  NOTE:: e.g try to understand (VALIDATE via Regex and sign up and sign in form)

Login.js

   import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

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
    
    const message = checkValidData({nameData, emailData, passwordData},isSignInForm);
    setErrorMessage(message);
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
            className="bg-red-700 hover:bg-red-500 hover:cursor-pointer py-2 px-16 rounded-lg mx-20 my-6"
            onClick={handleButtonClick}
          >
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

validate.js

export const checkValidData = ({nameData = "", emailData, passwordData},isSignInForm=true ) => {
  // Skip name validation if in Sign In mode
  if (!isSignInForm) {
    if (nameData.length === 0) {
      return "Name is required";
    }
    if (!/([a-zA-Z0-9_\s]+)/.test(nameData)) {
      return "Name is not valid";
    }
  }
  const isMailValid = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(
    emailData
  ); //if this pass it will return true or false in it

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}/.test(passwordData); //if pass return true or false

  //   if (!isNameValid) return "Name is not valid";
  if (!isMailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};

10::
Firebase & deploying app to production
NOTE::Authentication (For backend we are using Google Firebase (Simple Firebase(console) not Firebase studio))

FIREBASE STEPS:
-->GO TO FIREBASE official website and 
-->npm install firebase install this 
-->inside uitils folder we have to put config in firebase.js file
-->npm install -g firebase-tools (NOTE::To host your site with Firebase Hosting, you need the Firebase CLI (a command line tool))
-->inside your firebase project go to authentication 
-->firebase login
-->firebase init (it creates firebase config for us)
-->in parcel (we have dist folder where all the bundle app/files goes )similarly in create react app we have build folder for production ready app
-->npm run build(build optimized version of app for production)
-->firebase deploy(to deploy in firebase)

-->steps for deployment:
1)npm install -g firebase-tools
2)firebase login
3)firebase init
4)firebase deploy

Steps to re-deploy updates::
-->for deploy updated code to Firebase to see/render updated UI
note: 1)npm run build (v.v imp step )beacuse firebase takes code from build folder not from your source code
      2)firebase deploy


NOTE::in firebase authentication(part disable CORS extension)

-->whenever user sign up in firebase it creates a accesstoken for us and it uses that accesstoken to verify authentication
-->For sign in (it gives us accesstoken and so that we can communicate with firebase and authenticate the user)
NOTE::-(->implement SIGN UP AND SIGN IN api integration of firebase _read documentation properply)

11::
-->Implement redux/toolkit and provide store to app and add actions addUser and removeUser ,created userSlice

Redux toolkit (setup and configuration)
-->npm i -D @reduxjs/toolkit
-->npm install react-redux



12::
-->Instead of using useDispatch() everytime in new component so,we used fireBase onAuthStateChanged API 
which we will get FROM FIREBASE basically when we sign up ,sign in and logout bascially whenever there is authenticate state change
we want to call this API once so we can use this inside useEffect and we can write code in root level (not mandatory)
e.g import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

NOTE::here we also want that after sign in we want to navigat eit to Browser page
so we use hook useNavigate() hook (GO to Login.js file and use Navigate hook there)

13::
-->Implemented SIGN OUT button and use FireBase API to signout (behind the sence handled by firebase itself)
-->Use Update API from fireBase (to get displayName, photoURL ) UPDATED after user signup/register successfully

NOTE::
--> onAuthStateChanged(auth, (user) => (V.V.IMP)
Definition-->>{//It listens for changes in the user's authentication state (sign-in, sign-out, token refresh).It automatically detects if a user is already logged in when the app loads (using stored credentials like cookies or local storage).It provides immediate updates whenever the authentication state changes.


Note:: Inside Body.js

if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(auth, emailData, passwordData)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          //ONCE SIGN IN I.E USER IS successfully registered and then update the profile(i.e displayName,photoURL) in Firebasw(Use Firebase Update API)
          updateProfile(user, {
  ***(V.V.IMP)***//here it's not updating even we update values (kind of bug )in depth basically (we are putting values Name,password,Gmail from form and when click on sign up button that time store is updated but that time displayname,phoo url is not there and after that we are dispatching the data(i.e use firebase API) where we update value i.e display name,photoURL, SO THAT'S WHY IT'S NOT UPdating first time in store because update firebase API call after create user (in which we are updating displayname, photourl) SO SOLUTION FOR THAT is dispatch action to store after update the displayName, photourl so that store have all updated values/data this time including displayName,photourl)
            displayName: nameData,
            photoURL:
              "https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg", //I not used this
          })
            .then(() => {
              // Profile updated! successfully we have to dispatch action and update the store again with updated values
              const { uid, email, displayName,photoURL } = auth.currentUser;//not use user(because user don't have updated value and this time we will want a new updated value which auth have which comes from getAuth() function)
                      dispatch(addUser( {uid: uid, email: email, displayName: displayName ,photoURL:photoURL})); 
                    
              console.log("displayName: nameData,", nameData);
              navigate("/browse");
              // ...
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
              // ...
            });


--------------08-06-2025------------

14::
(BUGS FIXED)
  1)If we are using /browse even user is not login it redirect to browse page we have to restrict that first i.e redirect to login page only when user is login
  2)if user is login already(and leave the website without signout) then we have to show browse page no need to show login page first.  (i.e if login successfullt url is /browse then if someone try to edit url to / and user is still logged in then still showing /browse page not /(home page))

  solution below:
 2)solved
  -->//we are writing this inside header because we want to  use Navigate hook(and navigate hook only use inside router component(i.e route provider) so Header is commom place which is always present and also in router other we we use navigate outside router it gives error)





TMDB API's use to build/show/fetch movies (stable API not keep changing frequently) and build browse page

-->            


*/}