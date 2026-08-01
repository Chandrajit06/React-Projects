import { useEffect, useState } from "react";
import { ThemeProvider } from "../../contexts/ThemeContext";
import ThemeBtn from "./ThemeBtn";
import Card from "./Card";

function ThemeSwitcher() {
    const [themeMode, setThemeMode] = useState("light"); // State to track current theme, default "light"
    const lightTheme = () => {
        setThemeMode("light");
    };
    const darkTheme = () => {
        setThemeMode("dark");
    };

    useEffect(() => {
        // Add current theme class to <html>
        document.querySelector("html").classList.remove("light", "dark");
        document.querySelector("html").classList.add(themeMode);
    }, [themeMode]); // Runs every time themeMode changes

    return (
        <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
            <div className="flex flex-wrap min-h-screen items-center bg-slate-950">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>
                    <Card />
                    <div className="w-full max-w-sm mx-auto"></div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default ThemeSwitcher;
