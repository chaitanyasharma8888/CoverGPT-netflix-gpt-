import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const topRated=useSelector((store)=>store.movies.topRated);
  const upcomingMovies=useSelector((store)=>store.movies.upcomingMovies)
  // console.log("popular Movies 88",popularMovies)
  // console.log("movies 88", movies);
  console.log("topRated",topRated)
  return (
    <>
      <div className="relative z-10  bg-transparent  px-14 pr-6">
        <MoviesList title={"Now Playing"} movies={movies} />
        <MoviesList title={"Trending"} movies={popularMovies} />
        <MoviesList title={"Top Rated"} movies={topRated} />
        <MoviesList title={"Upcoming"} movies={upcomingMovies} />
      </div>
    </>
  );
};
export default SecondaryContainer;
