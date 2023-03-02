import React, { createContext, useEffect, useState } from "react";
import { isLogin } from "../services/auth";

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
  const [currentUser, setCurrentUser] = useState({
    isLogin: false,
    data: {},
  });

  useEffect(() => {
    const getUser = async () => {
      const user = await isLogin();
      console.log(user.currentUser);
      user
        ? setCurrentUser({
            ...currentUser,
            isLogin: true,
            data: { ...user.currentUser },
          })
        : setCurrentUser({ ...currentUser, isLogin: false, data: {} });
    };

    getUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
