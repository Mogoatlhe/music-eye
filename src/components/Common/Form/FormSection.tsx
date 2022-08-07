const FormSection = ({
  id,
  type,
  label,
}: {
  id: string;
  type: string;
  label: string;
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} />
    </div>
  );
};

export default FormSection;
