import { createContext, useState } from "react";

const AuthContext = createContext();

const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [Token, setToken] = useState("");
  const [User, setUser] = useState({
    email: "",
    username: "",
  });

  //Login function to dispatch
  const Auth = (token, email, username) => {
    setToken(token);
    setUser({
      email: email,
      username: username,
    });
  };

  //Confirm authentication
  const isAuth = () => {
    if (Token) {
      return true;
    }
  };

  //Destroy session
  const destroyAuth = () => {};

  return (
    <Provider value={{ Token, User, Auth, isAuth, destroyAuth }}>
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
