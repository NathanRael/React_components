import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [authInfo, setAuthInfo] = useState(
    JSON.parse(sessionStorage.getItem("agence_info")) || {}
  );
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => {
    sessionStorage.clear();
    setAuthInfo({});
    navigate("/login");
  };

  const storeAuth = (data) => {
    setAuthInfo(data);
    sessionStorage.setItem("agence_info", JSON.stringify(data));
  };

  const isLoggedIn = () => {
    return authInfo.id ? true : false;
  };

  const isSupAdmin = () => {
    return sessionStorage.getItem("agence_info").isSupAdmin;
  };

  return (
    <AuthContext.Provider
      value={{
        authInfo,
        setAuthInfo,
        logout,
        isLoggedIn,
        storeAuth,
        isSupAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
