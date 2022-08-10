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
    <div className="grid grid-cols-1 gap-1">
      <label className="font-stoke text-lg tracking-wide" htmlFor={id}>
        {label}
      </label>
      <input
        className="border border-solid border-jet h-10 rounded-md focus:outline-none p-2 focus:border-0 focus:border-b focus:rounded-none"
        id={id}
        type={type}
      />
    </div>
  );
};

export default FormSection;
