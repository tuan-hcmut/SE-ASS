import React, { createContext, useEffect, useState } from "react";
import { isLogin } from "../services/auth";
import { useNavigate } from "react-router-dom";

interface GeneralProps {
  children: JSX.Element[] | JSX.Element;
}

interface ContextProps {
  user: any;
}

const AuthContext = createContext<ContextProps>({
  user: {},
});

export const AuthProvider: React.FC<GeneralProps> = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({
    inProcess: false,
    isLogin: false,
    data: {},
  });

  useEffect(() => {
    const getUser = async () => {
      const user = await isLogin();
      user.currentUser
        ? setCurrentUser({
            ...currentUser,
            inProcess: true,
            isLogin: true,
            data: { ...user.currentUser },
          })
        : setCurrentUser({ ...currentUser, inProcess: true, isLogin: false, data: {} });

      console.log(user);
      if (!user.currentUser) navigate("login");
      else if (!user.currentUser.role) navigate("user/selectrole");
    };

    getUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: currentUser,
      }}
    >
      {currentUser.inProcess && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
