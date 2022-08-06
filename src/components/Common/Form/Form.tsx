import FormSection from './FormSection';
import type { RootState } from '../../../app/store';
import { useSelector } from 'react-redux';

const Form = () => {
  const accessType = useSelector((state: RootState) => state.accessType.value);
  const id = '';
  const type = '';
  return (
    <form>
      <p>{accessType}</p>
      <FormSection id={id} type={type} />
    </form>
  );
};

export default Form;
