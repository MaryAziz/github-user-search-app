import { useState, createContext } from 'react';
import './App.css';
import Home from './Component/Home/Home';
export const Themecontext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  function changeTheme() {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  }

  return (
    <>
    <Themecontext.Provider value={{ theme, toggleTheme: changeTheme }}>
      <Home></Home>
    </Themecontext.Provider></>
  );
}

export default App;
