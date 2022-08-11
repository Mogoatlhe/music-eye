import FormSection from './FormSection';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { changeAccessType } from '../../../features/acessType/accessTypeSlice';
import Button from '../../Button';
import AuthIcons from './AuthIcons';

const Form = () => {
  const accessType = useAppSelector((state) => state.accessType.value);
  const dispatch = useAppDispatch();
  const formSectionAttributes = [
    {
      id: 'username',
      label: 'Username',
      type: 'text',
      minLength: 3,
    },
    {
      id: 'email',
      label: 'Email',
      type: 'email',
      minLength: 0,
    },
    {
      id: 'password',
      label: 'Password',
      type: 'password',
      minLength: 8,
    },
    {
      id: 'confirm-password',
      label: 'Confirm Password',
      type: 'password',
      minLength: 8,
    },
  ];

  const displayFormSection = () => {
    return formSectionAttributes
      .map((formSection, index) => {
        let label = formSection.label;

        if (accessType.accessType === 'Sign In' && label === 'Username') {
          label = 'Username / Email';
        }

        return (
          <FormSection
            key={index}
            id={formSection.id}
            type={formSection.type}
            label={label}
            minLength={formSection.minLength}
          />
        );
      })
      .filter((formSection, index) => {
        if (
          accessType.accessType === 'Sign Up' ||
          (index % 2 === 0 && accessType.accessType === 'Sign In')
        ) {
          return formSection;
        }
      });
  };

  return (
    <form className="p-6 lg:flex lg:flex-col justify-around lg:py-32 lg:w-5/12">
      <legend className="font-special-elite text-4xl text-jet">
        {accessType.accessType}
      </legend>
      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-3">
        {displayFormSection()}
      </div>
      <p className="font-space-mono text-jet py-3 text-center">
        {accessType.accessTypeText}
        <button
          className="text-yellow-orange"
          onClick={(e) => {
            e.preventDefault();
            const target = e.target as HTMLElement;
            const targetText = target.innerText.toLowerCase();
            const tempAccessType =
              targetText === 'sign in' ? 'Sign In' : 'Sign Up';

            return dispatch(changeAccessType(tempAccessType));
          }}
        >
          {accessType.diffAccessType}
        </button>
      </p>
      <Button value={accessType.accessType} />
      <p className="text-yellow-orange text-center text-1xl font-space-mono py-2">
        or
      </p>
      <AuthIcons />
    </form>
  );
};

export default Form;
