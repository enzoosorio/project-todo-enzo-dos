const FormField = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}) => (
  <>
    <input
      className="block w-full mt-2 rounded-sm p-1 text-black outline-none px-2"
      type={type}
      placeholder={placeholder}
      {...register(name, { valueAsNumber })}
    />
    {error && (
      <p className="text-red-400 text-[13px] error-message">{error.message}</p>
    )}
  </>
);
export default FormField;
