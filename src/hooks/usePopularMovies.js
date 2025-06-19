import React, { useEffect } from "react";
import { API_OPTIONS, POPULAR_MOVIES } from "../utils/constant";
import { addPopularMovies } from "../utils/nowPlayingMovieSlice";
import { useDispatch } from "react-redux";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const movies = await fetch(POPULAR_MOVIES, API_OPTIONS);
    const data = await movies.json();
    console.log("8888",data.results);
    dispatch(addPopularMovies(data.results));
  };

  return <></>;
};

export default usePopularMovies;
