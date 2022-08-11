import logo from '../../assets/musiceye-logo.png';
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { changeAccessType } from '../../features/acessType/accessTypeSlice';

const SplashPageHeader = () => {
  const accessType = useAppSelector((state) => state.accessType.value);
  const dispatch = useAppDispatch();
  const [accessColor, setAccessColor] = useState({
    signUp: 'bg-celeste',
    signIn: '',
  });

  const changeAccessColour = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const target = e.target as HTMLElement;
    const targetText = target.innerText;
    let accessType;

    if (targetText === 'Sign in') {
      accessType = 'Sign In';
      setAccessColor({
        signIn: 'bg-celeste',
        signUp: '',
      });
    } else {
      accessType = 'Sign Up';
      setAccessColor({
        signUp: 'bg-celeste',
        signIn: '',
      });
    }

    return dispatch(changeAccessType(accessType));
  };

  return (
    <div className="lg:flex lg:w-24 lg:bg-jet lg:h-screen lg:items-center">
      <div
        className="flex fixed z-10 bg-white w-screen p-4 justify-between items-center border-b 
      border-jet h-1/16 lg:h-[100vh] lg:flex-col lg:w-24"
      >
        <div className="lg:h-2/6 lg:w-24 flex justify-center items-center">
          <img
            src={logo}
            alt="musiceye logo"
            className="w-14 sm:w-16 h-8 sm:h-10"
          />
        </div>
        <div
          className="flex p-4 pr-2 justify-between w-60 sm:w-72 pl-20 items-center font-stoke text-xl sm:text-2xl
        text-jet lg:flex-col lg:p-0 lg:h-4/6"
        >
          <div className="lg:h-3/6 lg:flex lg:w-24 lg:justify-between lg:pr-3">
            <div className={`lg:w-2 ${accessColor.signIn}`}></div>
            <button onClick={changeAccessColour}>Sign in</button>
          </div>
          <div className="lg:h-3/6 lg:flex lg:w-24 lg:justify-between lg:pr-3">
            <div className={`lg:w-2 ${accessColor.signUp}`}></div>
            <button onClick={changeAccessColour}>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashPageHeader;
