import { useState, createContext, useContext } from "react";
import NavLinks from "./NavLinks";

export const NavbarContext = createContext();

// Custom Hook
export const useAppContext = () => useContext(NavbarContext);

export default function Navbar() {
  const [user, setUser] = useState({ name: "Zidan" });
  const logout = () => setUser(null);

  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <header className="flex w-full items-center justify-between bg-sky-600 px-5 py-3 text-white">
        <h1 className="text-2xl font-bold">Context API</h1>
        <NavLinks />
      </header>
    </NavbarContext.Provider>
  );
}
