
import { useAuth } from '../hooks'
import { Link } from 'react-router-dom';
import { RouteNames } from '../utils';
import Avatar from './Avatar';
import logo from "../assets/flame-sign-up.png";

const Header = () => {
    const { login, logout, user } = useAuth();

    const UserInfo = !user 
    ? <Link className="p-2.5 select-none cursor-pointer flex flex-row justify-center items-center bg-[rgba(200,200,200,.1)] shadow-[rgba(195,140,140,.1)] shadow-lg" to={RouteNames.LOGIN}>
        <div className="m-0 px-3 text-secondary font-semibold uppercase">
            login
        </div>
        <Avatar />
    </Link>
    : <p className="text-white">
        Welcome, { user.name ?? "Kyle Walker" }! { " " }
        <span className='text-red-800 cursor-pointer' onClick={logout}>
            Logout
        </span>
    </p>
    
    return (
        <div className='flex flex-row justify-between h-20 mt-4 items-center w-full px-6'>
            <div className="items-center flex justify-between">
                {
                    user && <Link className='px-3 py-3 text-normal bg-green-700 text-secondary rounded-md active:focus:hover:brightness-90 uppercase' to={RouteNames.CREATE}>
                        create new survey
                    </Link>
                }
            </div>
            <div className="absolute left-1/2 -translate-x-1/2">
                <div className="object-contain max-w-[70px] cursor-pointer">
                    <img src={logo} />
                </div>
            </div>
            <div className="flex justify-between items-center flex-row">
                {
                    UserInfo
                }
            </div>

        </div>
    );
}


export default Header