import { useContext } from "react";
import { AuthContext } from "../contexts";


export interface User {
    uid: string;
    name: string;
    email: string;
    token: string;
}

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);

  const addUser = (user: User) => {
    setUser(user);
  };

  const removeUser = () => {
    setUser(null);
  };

  return { user, addUser, removeUser };
};
