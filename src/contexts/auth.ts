import { createContext } from "react";
import { type User } from "../hooks";

interface AuthContext {
    user: User | null,
    setUser: (user: User | null) => void
}

export const AuthContext = createContext<AuthContext>({
    user: null,
    setUser: () => {}
});
