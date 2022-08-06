const FormSection = ({ id, type }: { id: string; type: string }) => {
  return (
    <div>
      <label htmlFor={id}></label>
      <input id={id} type={type} />
    </div>
  );
};

export default FormSection;
