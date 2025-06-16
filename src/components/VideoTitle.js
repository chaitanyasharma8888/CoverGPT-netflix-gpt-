const VideoTitle = ({ title, overview }) => {
  return (
    <>
      <div className="m-16 px-12">
        <h1 className="font-extrabold text-6xl">{title}</h1>
        <p className="p-6 text-xl w-[650px]">{overview}</p>
        <div className="p-6">
          <button className="bg-gray-500 bg-opacity-85 text-white m-1 py-3 px-6 border rounded-lg font-semibold hover:bg-gray-600 shadow-lg hover:bg-opacity-85">
           ▶ Play
          </button>
          <button className="bg-gray-500 bg-opacity-85 text-white m-1 py-3 px-6 border rounded-lg font-semibold hover:bg-gray-600 shadow-lg hover:bg-opacity-85">
           ℹ More Info
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
