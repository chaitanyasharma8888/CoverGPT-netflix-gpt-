import { createSlice } from "@reduxjs/toolkit";

const nowPlayingMovieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo:null,
  },
  reducers: {
    setNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo:(state,action)=>{
      state.trailerVideo=action.payload;
    }
  },
});

export const { setNowPlayingMovies,addTrailerVideo } = nowPlayingMovieSlice.actions;
export default nowPlayingMovieSlice.reducer;
