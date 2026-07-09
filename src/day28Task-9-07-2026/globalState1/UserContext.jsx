import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState("Sulochana");

  return (
    <UserContext.Provider value={{ user, setUser }}>
            <h2>Global State</h2>
      {children}
      
    </UserContext.Provider>
  );
}

export default UserProvider;