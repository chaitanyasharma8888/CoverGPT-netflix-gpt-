import React, { useEffect } from "react";
import { API_OPTIONS, PLAYING_MOVIES } from "../utils/constant";
import { setNowPlayingMovies } from "../utils/nowPlayingMovieSlice";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const movies = await fetch(PLAYING_MOVIES, API_OPTIONS);
    const data = await movies.json();
    // console.log(data.results);
    dispatch(setNowPlayingMovies(data.results));
  };

  return <></>;
};

export default useNowPlayingMovies;
