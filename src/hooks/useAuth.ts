import { useEffect } from "react"
import { AuthContext } from "../contexts"
import { useLocalStorage } from "./useLocalStorage";
import { User, useUser } from ".";

export const useAuth = () => {

    const { user, addUser, removeUser } = useUser();
    const { getItem } = useLocalStorage();

    // useEffect(g)

    const login = (user: User) => {
        addUser(user);
    }

    const logout = () => {
        removeUser();
    }


    return { user, login, logout }
};