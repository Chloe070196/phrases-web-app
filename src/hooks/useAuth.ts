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
      if (!user.id || !user.username) {
        throw new Error('error when completing log in: no username added')
      }
      localStorage.setItem('userId', user.id)
      localStorage.setItem('username', user.username)
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

  const onPageReload = () => {
    const userId = localStorage.getItem("userId");
    const username = localStorage.getItem("username");
    if (userId && username) {
      setUser({id:userId, username})
    }
  }

  return { checkLogIn, onLogIn, onLogOut, onPageReload };
};
export { useAuth };
