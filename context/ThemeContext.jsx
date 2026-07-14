import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";


const ThemeContext = createContext();


export function ThemeProvider({ children }) {

  const [dark, setDark] = useState(false);


  // load theme on first mount
  useEffect(() => {

    const savedTheme = localStorage.getItem("theme");

    const isDark = savedTheme === "dark";

    setDark(isDark);

    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

  }, []);



  // apply changes whenever theme updates
  useEffect(() => {

    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

  }, [dark]);



  const toggleTheme = () => {
    setDark(prev => !prev);
  };



  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}



export function useTheme() {
  return useContext(ThemeContext);
}