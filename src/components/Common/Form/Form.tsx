import FormSection from './FormSection';
import type { RootState } from '../../../app/store';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Form = () => {
  const accessType = useSelector((state: RootState) => state.accessType.value);
  const formSectionAttributes = [
    {
      id: 'username',
      label: 'Username',
      type: 'text',
    },
    {
      id: 'email',
      label: 'Email',
      type: 'email',
    },
    {
      id: 'password',
      label: 'Password',
      type: 'password',
    },
    {
      id: 'confirm-password',
      label: 'Confirm Password',
      type: 'password',
    },
  ];

  useEffect(() => {}, [accessType]);
  const displayFormSection = () => {
    return formSectionAttributes
      .map((formSection, index) => {
        let label = formSection.label;

        if (accessType === 'Sign In' && label === 'Username') {
          label = 'Username / Email';
        }

        return (
          <FormSection
            key={index}
            id={formSection.id}
            type={formSection.type}
            label={label}
          />
        );
      })
      .filter((formSection, index) => {
        if (
          accessType === 'Sign Up' ||
          (index % 2 === 0 && accessType === 'Sign In')
        ) {
          return formSection;
        }
      });
  };

  return (
    <form className="p-6">
      <p className="font-special-elite text-3xl">{accessType}</p>
      <div>{displayFormSection()}</div>
    </form>
  );
};

export default Form;
