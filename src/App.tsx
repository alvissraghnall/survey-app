import { useState } from "react";
import "./App.css";
import { AuthContext } from "./contexts";
import { User } from "./hooks";
import { Outlet } from "react-router-dom";

function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Outlet />
    </AuthContext.Provider>
  );
}

export default App;
