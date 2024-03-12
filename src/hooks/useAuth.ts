import { useContext } from "react";
import { AuthContext } from "../context/auth";
import { UserType } from "../types";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogIn = (user: UserType) => {
    if (user.token) {
      localStorage.setItem("jwt", user?.token);
      setUser(user);
    }
  };
  const onLogOut = () => {
    localStorage.removeItem("jwt");
    setUser(null);
    navigate("/login")
  };

  const checkLogIn = () => {
    const jwt = localStorage.getItem("jwt");
    return !!jwt;
  };

  return { checkLogIn, onLogIn, onLogOut };
};
export { useAuth };
