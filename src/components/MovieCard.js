import React from "react";
import {IMG_CDN_URL} from "../utils/constant";


const MovieCard = ({posterPath}) => {
  return (
    <>
      <div className="text-white w-[170px] mx-2 py-3 pr-3 rounded-lg ">
        <img alt="icon" src={IMG_CDN_URL + posterPath}/>
      </div>
      
    </>
  );
};

export default MovieCard;
