import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieID }) => {
  useTrailerVideo(movieID); //CUSTOM HOOK FOR fetch trailer video

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  // Early return if no trailerVideo
  if (!trailerVideo) return null; // or return a loading spinner
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 -mt-8">
      {" "}
      {/* fixed positioning and z-0 */}
      <iframe
        // className="w-full h-full"
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo.key +
          "?autoplay=1&mute=1&controls=0&loop=1&playlist=" +
          trailerVideo.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        
      ></iframe>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>{" "}
      {/* Optional overlay */}
    </div>
  );
};

export default VideoBackground;
