const TaglineText = () => {
  return (
    <div className="relative text-white flex flex-col items-center justify-evenly h-[100%] opacity-100">
      <div className="font-special-elite">
        <p className="-ml-5 text-5xl p-2 pt-3 bg-jet w-fit">Welcome</p>
        <p className="text-4xl bg-jet w-fit ml-5 -mt-3 px-2 pb-1">
          to <span className="bg-celeste">musiceye</span>
        </p>
      </div>
      <p>
        Share Spotify / Apple music / etc. Screenshots of what you're listening
        to
      </p>
      <p>See what your friends are listening to</p>
      <p>Learn new music</p>
      <p>Listen to your friends</p>
    </div>
  );
};

export default TaglineText;
