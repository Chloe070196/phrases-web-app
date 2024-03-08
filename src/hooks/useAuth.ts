import { useContext } from "react";
import { AuthContext } from "../context/auth";
import { UserInContextType } from "../types";

const useAuth = () => {
  const { setUser } = useContext(AuthContext);

  const onLogIn = (user: UserInContextType) => {
    if (user.token) {
      localStorage.setItem("jwt", user?.token);
      setUser(user);
    }
  };
  const onLogOut = () => {
    localStorage.removeItem("jwt");
    setUser(null);
  };

  const checkLogIn = () => {
    const jwt = localStorage.getItem("jwt");
    return !!jwt;
  };

  return { checkLogIn, onLogIn, onLogOut };
};
export { useAuth };
