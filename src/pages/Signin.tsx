import { useState } from "react";
import signin_vector from "../assets/flame-sign-up.png";
import { Input } from "../components";
import { HiMail, HiLockClosed } from "react-icons/hi";

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string | undefined }>({});

  const handleValidation = (fieldName: string, error: string | undefined) => {
    setValidationErrors((prevErrors) => ({ ...prevErrors, [fieldName]: error }));
  };

  const validateEmail = (email: string) => {
    if (!email) return "Email is required";
    if (!/^\S+@\S+\.\S+$/.test(email)) return "Invalid email address";
    return undefined; // No error
  };

  const validatePassword = (password: string) => {
    if (!password) return "Password is required";
    if (password.length < 8) return "Password must be at least 8 characters long";
    return undefined; // No error
  };

  return (
    <div className='flex-1 self-center justify-self-center max-w-7xl flex justify-center items-center flex-col w-full my-12 bg-[rgb(54,70,170)]'>
      <div className="w-48 object-contain cursor-pointer">
        <img src={signin_vector} alt="" className='w-full' />

      </div>

      <h1 className="text-[rgb(242,242,242)] capitalize text-5xl my-7 mx-6">
        sign in
      </h1>

      <div className="m-5 p-12 shadow-md shadow-[rgb(96,51,51)]/10 bg-[rgb(55,60,62)]/10 w-11/12 max-w-lg ">
        <form >
          <Input name="email" type="email" label="Email Address" value={email} onError={handleValidation} setValue={setEmail} icon={<HiMail className="w-7 h-7 text-base text-white" />} validate={validateEmail} />
          <Input name="password" type="password" label="Password" onError={handleValidation} value={password} setValue={setPassword} icon={<HiLockClosed className="w-7 h-7 text-base text-white" />} validate={validatePassword} />

          <div>
            {Object.keys(validationErrors).map((fieldName) => validationErrors[fieldName] && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500" key={fieldName}> <span className="font-medium">Oops!</span> {validationErrors[fieldName]}</p>
            ))}
          </div>

          <button type="submit" className="uppercase focus:outline-none text-white bg-green-400 w-full my-5 hover:bg-green-500 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" style={{ backgroundColor: "rgb(74 222 128)" }}>submit</button>

        </form>
      </div>
    </div>
  )
}

export default Signin;