const TaglineText = () => {
  return (
    <div className="relative text-white font-space-mono flex flex-col items-center justify-evenly h-[100%] opacity-100">
      <div className="font-special-elite">
        <p className="-ml-5 text-5xl p-2 pt-3 bg-jet w-fit">Welcome</p>
        <p className="text-4xl bg-jet w-fit ml-5 -mt-3 px-2 pb-1">
          to <span className="text-celeste">musiceye</span>
        </p>
      </div>
      <p className="text-justify w-80 bg-jet p-1">
        Share Spotify / Apple music / etc. Screenshots of what you're listening
        to
      </p>
      <p className="text-justify w-72 bg-jet p-1">
        See what your friends are listening to
      </p>
      <p className="text-justify w-fit bg-jet p-1">Learn new music</p>
      <p className="text-celeste bg-jet text-2xl w-fit p-1 font-special-elite">
        Listen to your friends
      </p>
    </div>
  );
};

export default TaglineText;
