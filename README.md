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
-->


*/}