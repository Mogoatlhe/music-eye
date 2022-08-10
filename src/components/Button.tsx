const Button = ({ value }: { value: string }) => {
  return (
    <button className="bg-jet text-white w-full h-12 font-special-elite text-3xl py-2 rounded-md">
      {value}
    </button>
  );
};

export default Button;
