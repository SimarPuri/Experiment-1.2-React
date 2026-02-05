import React, { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, theme, toggleTheme }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
