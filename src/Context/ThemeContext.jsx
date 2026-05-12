import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext('dark');

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('weather_theme');
        if (savedTheme) {
            document.body.className = savedTheme;
            return savedTheme;
        }
        return 'dark';
    });

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('weather_theme', newTheme);
        setTheme(newTheme);
    }

    useEffect(()=> {
        document.body.className = theme;
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext);
}