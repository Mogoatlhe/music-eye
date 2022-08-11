import React from 'react';
import { IconType } from 'react-icons';

const AuthIcon = ({ icon }: { icon: IconType }) => {
  return (
    <button
      className="border border-jet rounded-md p-4 text-4xl"
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      {React.createElement(icon)}
    </button>
  );
};

export default AuthIcon;
