import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

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
    const token = Cookies.get("token");
    const email = Cookies.get("email");
    const username = Cookies.get("username");

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

    Cookies.set("token", token, { expires: 30 });
    Cookies.set("email", email, { expires: 30 });
    Cookies.set("username", username, { expires: 30 });
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

    Cookies.remove("token");
    Cookies.remove("email");
    Cookies.remove("username");
    router.push("/auth/login");
  };

  return (
    <Provider value={{ Token, User, Auth, isAuth, destroyAuth }}>
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
