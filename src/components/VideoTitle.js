const VideoTitle = ({ title, overview }) => {
  return (
    <div className="relative z-10 px-32 text-white pt-[20%] py-1">
      {" "}
      {/* z-10 and adjusted padding */}
      <h1 className="font-extrabold text-6xl">{title}</h1>
      <p className="p-6 text-xl w-[650px]">{overview}</p>
      <div className="p-6">
        <button className="bg-white  text-black m-1 py-3 px-6 border rounded-md font-semibold hover:opacity-50 ">
          Play
        </button>
        <button className="bg-white  text-black m-1 py-3 px-6 border rounded-md font-semibold hover:opacity-50 ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
