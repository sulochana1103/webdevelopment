import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Current Theme: {theme}</h2>

      <button onClick={() =>setTheme(theme === "Light" ? "Dark" : "Light")
}
      >
        Change Theme
      </button>
    </div>
  );
}

export default Header;