import { BiUserCircle } from 'react-icons/bi';

interface AvatarProps {
    src: string;
}

const Avatar = () => {
  return (
    <div className="w-6 h-6 overflow-hidden rounded-full">
        <BiUserCircle className="h-full w-full" />
    </div>
  )
}

export default Avatar;