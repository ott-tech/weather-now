import { useTheme } from "../Context/ThemeContext";
import { FiSun, FiMoon } from 'react-icons/fi';

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
        </button>
    );
}

export default ThemeToggle;