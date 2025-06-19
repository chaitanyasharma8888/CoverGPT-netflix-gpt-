import React, { useEffect } from "react";
import { API_OPTIONS, TOP_RATED_MOVIES } from "../utils/constant";
import { addTopRatedMovies } from "../utils/nowPlayingMovieSlice";
import { useDispatch } from "react-redux";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    const movies = await fetch(TOP_RATED_MOVIES, API_OPTIONS);
    const data = await movies.json();
    console.log("88889090",data.results);
    dispatch(addTopRatedMovies(data.results));
  };

  return <></>;
};

export default useTopRatedMovies;
