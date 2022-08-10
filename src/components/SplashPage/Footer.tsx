import { BsLinkedin, BsGithub, BsGlobe } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="bg-jet text-white p-4 font-special-elite">
      <p className="flex gap-2">
        Created by:
        <a
          href="https://www.linkedin.com/in/moeketsi-mogoatlhe-6b7807194"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/mogoatlhe" target="_blank">
          <BsGithub />
        </a>
        <a href="http://ofent.se" target="_blank">
          <BsGlobe />
        </a>
      </p>
    </div>
  );
};

export default Footer;
