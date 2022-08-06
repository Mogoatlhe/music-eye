import logo from '../../assets/musiceye-logo.png';
import type { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { changeAccessType } from '../../features/acessType/accessTypeSlice';

const SplashPageHeader = () => {
  const accessType = useSelector((state: RootState) => state.accessType.value);
  const dispatch = useDispatch();

  return (
    <div className="flex fixed z-10 bg-white w-screen p-4 justify-between items-center border-b border-neutral-700 h-1/16">
      <img src={logo} alt="musiceye logo" className="w-14 h-8" />
      <div className="flex p-4 pr-2 justify-between w-60 pl-20 items-center font-stoke text-xl text-neutral-700">
        <button onClick={() => dispatch(changeAccessType('Sign in'))}>
          Sign in
        </button>
        <button onClick={() => dispatch(changeAccessType('Sign up'))}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default SplashPageHeader;
