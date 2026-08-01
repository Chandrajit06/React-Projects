import { createContext, useContext } from "react"

const ThemeContext = createContext({        // create a context with default values
    themeMode: "Light",
    lightTheme: () => {},
    darkTheme: () => {},
})

const ThemeProvider = ThemeContext.Provider;

function useTheme(){    // custom hook to consume the theme context
    return useContext(ThemeContext);
}

export { ThemeProvider }
export default useTheme