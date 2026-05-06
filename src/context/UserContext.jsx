import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("usuarioActivo");
    if (data) setUser(JSON.parse(data));
  }, []);

  const saveUser = (u) => {
    setUser(u);
    localStorage.setItem("usuarioActivo", JSON.stringify(u));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("usuarioActivo");
  };

  const addPoints = (points) => {
    setUser((prev) => {
      if (!prev) return prev;
      const nuevos = { ...prev, puntos: (prev.puntos || 0) + points };
      localStorage.setItem("usuarioActivo", JSON.stringify(nuevos));
      return nuevos;
    });
  };

  return (
    <UserContext.Provider value={{ user, saveUser, logout, addPoints }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);