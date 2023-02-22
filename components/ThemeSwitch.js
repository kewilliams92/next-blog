import { useState } from "react";
import DarkTheme from "./DarkTheme";

function loadDarkMode(){
    if(typeof localStorage === "undefined") return false;
    const value = localStorage.getItem("darkMode");
    return (value === null) ? false : JSON.parse(value);
}


function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(loadDarkMode);

  const handleClick = () => {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
    };

  console.log("ThemeSwitch DARKMODE rendered", darkMode);
  //hydration is the process of converting the server-side rendered markup into a client-side rendered React application
  const text = darkMode ? "Light Mode" : "Dark Mode";
  return (
    <>
      <button onClick={handleClick} suppressHydrationWarning>{text}</button>
      <style jsx>{`
        button {
          background: none;
          border: none;
          color: inherit;
            cursor: pointer;
            font: inherit;
            line-height: normal;
        }
      `}</style>
        {darkMode && <DarkTheme />}
    </>
  );
}

export default ThemeSwitch;
