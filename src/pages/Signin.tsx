import { useState } from "react";
import signin_vector from "../assets/flame-sign-up.png";
import { Input } from "../components";
import { HiMail, HiLockClosed } from "react-icons/hi";

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          <Input name="email" type="email" label="Email Address" value={email} setValue={setEmail} icon={<HiMail className="w-8 h-8 text-base text-white" />} />
          <Input name="password" type="password" label="Password" value={password} setValue={setPassword} icon={<HiLockClosed className="w-8 h-8 text-base text-white" />} />
        </form>
      </div>
    </div>
  )
}

export default Signin;