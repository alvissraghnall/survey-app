import { useState } from "react";
import "./App.css";
import { AuthContext } from "./contexts";
import { User } from "./hooks";

function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {/* <Brows >
        
      </Brows> */}
    </AuthContext.Provider>
  );
}

export default App;
