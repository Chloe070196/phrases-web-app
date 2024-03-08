import React, { createContext, useState, ReactNode } from "react";
import type { AuthContextType, UserInContextType } from "../types";

const AuthContext = createContext<AuthContextType>({user: null, setUser: () => {}});

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserInContextType | null>(null);

  const contextValue: AuthContextType = {
    user,
    setUser,
  };

  return React.createElement(
    AuthContext.Provider,
    { value: contextValue },
    children
  );
};

export { AuthContext, AuthProvider };
