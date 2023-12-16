import React, { useContext } from "react";

export const UserContext = React.createContext();

export function UserProvider({ children, currentUser, setCurrentUser }) {
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
