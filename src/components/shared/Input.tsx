
interface InputProps {
  label: string;
  icon: JSX.Element;
  value: string;
  setValue: (value: string) => void;
  name: string;
  type: React.HTMLInputTypeAttribute;
  validate?: (value: string) => string | undefined;
  onError: (fieldName: string, error: string | undefined) => void;
}

const Input: React.FC<InputProps> = ({
  icon, label, value, setValue, name, type, validate, onError
}) => {

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (validate) {
      const validationError = validate(e.target.value);
      // Notify the parent component about the error
      onError(name, validationError);
    }
  };

  return (
    <div className="relative my-4 mb-6 z-0 w-full group">
      <div className="absolute inset-y-0 left-0 flex items-center w-10 pointer-events-none">
        {icon}
      </div>
      <input
        className="ml-9 block py-2.5 px-0 w-[calc(100%-2.5rem)] text-base text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-200 peer" 
        placeholder=" "
        required
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
        onBlur={handleBlur}
      />
      <label
        htmlFor={name}
        className="ml-9 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white/80 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        {label}
      </label>
    </div>
  )
}

export default Input;
