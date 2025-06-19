import React, { useEffect } from "react";
import { API_OPTIONS, UPCOMING_MOVIES } from "../utils/constant";
import { addTopRatedMovies } from "../utils/nowPlayingMovieSlice";
import { useDispatch } from "react-redux";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getUpComingMovies();
  }, []);

  const getUpComingMovies = async () => {
    const movies = await fetch(UPCOMING_MOVIES, API_OPTIONS);
    const data = await movies.json();
    console.log("88889090",data.results);
    dispatch(addTopRatedMovies(data.results));
  };

  return <></>;
};

export default useUpComingMovies;
