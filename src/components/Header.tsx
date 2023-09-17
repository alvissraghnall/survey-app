
import React from 'react'
import { useAuth } from '../hooks'

const Header = () => {
    const { login, logout, user } = useAuth();
    
    return (
        <div className='flex flex-row justify-between h-20 items-center w-full px-6'>


        </div>
    );
}


export default Header