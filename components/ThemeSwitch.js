import { useState } from "react";
import DarkTheme from "./DarkTheme";

function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  console.log("ThemeSwitch rendered", darkMode);
  const text = darkMode ? "Light Mode" : "Dark Mode";
  return (
    <>
      <button onClick={() => setDarkMode(!darkMode)}>{text}</button>
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
