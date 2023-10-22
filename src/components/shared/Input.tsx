
interface InputProps {
  label: string;
  icon: JSX.Element;
  value: string;
  setValue: (value: string) => void;
  name: string;
  type: React.HTMLInputTypeAttribute;
}

const Input: React.FC<InputProps> = ({
  icon, label, value, setValue, name, type
}) => {
  return (
    <div className="relative my-4">
      <div className="absolute inset-y-0 left-0 flex items-center w-10 pointer-events-none">
        {icon}
      </div>
      <input
        className="ml-10 block py-2.5 px-0 w-[calc(100%-2.5rem)] text-base text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" 
        placeholder=" "
        required
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
      />
      <label
        htmlFor={name}
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        {label}
      </label>
    </div>
  )
}

export default Input;
