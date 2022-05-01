import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

const AuthContext = createContext();

const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [Token, setToken] = useState("");
  const [User, setUser] = useState({
    email: "",
    username: "",
  });

  //Get Token on first render
  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const username = localStorage.getItem("username");

    setToken(token);
    setUser({
      email: email,
      username: username,
    });
  }, []);

  //Login function to dispatch
  const Auth = (token, email, username) => {
    setToken(token);
    setUser({
      email: email,
      username: username,
    });
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    localStorage.setItem("username", username);
  };

  //Confirm authentication
  const isAuth = () => {
    if (Token) {
      return true;
    } else {
      return false;
    }
  };

  //Destroy session
  const destroyAuth = () => {
    setToken("");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("username");
    router.push("/auth/login");
  };

  return (
    <Provider value={{ Token, User, Auth, isAuth, destroyAuth }}>
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };