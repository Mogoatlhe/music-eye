import logo from "../../assets/musiceye-logo.png";

const SplashPageHeader = () => {
  return (
    <div className = "flex p-4 justify-between items-center border-b border-neutral-800 h-1/16">
      <img src = {logo} alt = "musiceye logo" className = "w-14 h-8"/>
      <div className = "flex p-4 pr-2 justify-between w-60 pl-20 items-center font-stoke text-xl">
        <p>Sign in</p>
        <p>Sign up</p>
      </div>
    </div>
  );
}

export default SplashPageHeader;