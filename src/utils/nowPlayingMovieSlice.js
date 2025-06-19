import { createSlice } from "@reduxjs/toolkit";

const nowPlayingMovieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRated: null,
    upcomingMovies: null,
  },
  reducers: {
    setNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRated = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});

export const {
  setNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  upcomingMovies,
} = nowPlayingMovieSlice.actions;
export default nowPlayingMovieSlice.reducer;
