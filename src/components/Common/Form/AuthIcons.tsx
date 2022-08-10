import { BsApple } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { GrGoogle } from 'react-icons/gr';
import AuthIcon from './AuthIcon';

const AuthIcons = () => {
  const icons = [BsApple, FaFacebookF, BsTwitter, GrGoogle];

  const displayIcons = () => {
    return icons.map((icon, key) => <AuthIcon icon={icon} key={key} />);
  };
  return (
    <div className="text-jet flex justify-between mt-1">{displayIcons()}</div>
  );
};

export default AuthIcons;
