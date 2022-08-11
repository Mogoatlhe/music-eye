import logo from '../../assets/musiceye-logo.png';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { changeAccessType } from '../../features/acessType/accessTypeSlice';

const SplashPageHeader = () => {
  const accessType = useAppSelector((state) => state.accessType.value);
  const dispatch = useAppDispatch();

  return (
    <div className="lg:flex lg:w-fit lg:bg-jet lg:h-screen lg:items-center">
      <div
        className="flex fixed z-10 bg-white w-screen p-4 justify-between items-center border-b 
      border-jet h-min lg:h-[100vh] lg:flex-col lg:w-20"
      >
        <div className="lg:h-2/6 lg:w-20 flex justify-center items-center">
          <img
            src={logo}
            alt="musiceye logo"
            className="w-14 sm:w-16 h-8 sm:h-10"
          />
        </div>
        <div
          className="flex p-4 pr-2 justify-between w-60 sm:w-72 pl-20 items-center font-stoke text-xl sm:text-2xl
        text-jet lg:flex-col lg:p-0 lg:h-4/6 lg:text-xl"
        >
          <div className="lg:h-3/6 lg:flex lg:w-20 lg:justify-between lg:pr-2">
            <div className={`lg:w-1.5 ${accessType.accessColor.signIn}`}></div>
            <button onClick={() => dispatch(changeAccessType('Sign In'))}>
              Sign in
            </button>
          </div>
          <div className="lg:h-3/6 lg:flex lg:w-20 lg:justify-between lg:pr-2">
            <div className={`lg:w-1.5 ${accessType.accessColor.signUp}`}></div>
            <button onClick={() => dispatch(changeAccessType('Sign Up'))}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashPageHeader;
