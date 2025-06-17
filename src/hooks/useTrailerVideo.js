//fetching trailer video and updating store

import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/nowPlayingMovieSlice";
import { useDispatch } from "react-redux";

const useTrailerVideo = (movieID) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMoviesVideos();
  }, []);

  //fetch trailer-->make API call

  const getMoviesVideos = async () => {
    const data = await fetch(
      //   `https://api.themoviedb.org/3/movie/+${movieID}+/videos?language=en-US`,
      "https://api.themoviedb.org/3/movie/" +
        movieID +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log("video", json.results[43]); //43 (consist trailer)
    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filteredData.length ? filteredData[1] : json.results[0]; //condition if trailer is not there so
    // console.log("Trailer", trailer);
    dispatch(addTrailerVideo(trailer));
  };

  return <></>;
};

export default useTrailerVideo;
