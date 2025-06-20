import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return; //this is also know as early return
  //if(!movies)return

  const mainMovie = movies[0];
  // console.log("mainMovie", mainMovie);
  const { original_title, overview, id } = mainMovie;

  return (
    <>
      <VideoBackground movieID={id} />
      <VideoTitle title={original_title} overview={overview} />
    </>
  );
};

export default MainContainer;
