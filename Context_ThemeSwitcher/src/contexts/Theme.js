import { createContext ,useContext } from "react";
// create, provide,consume/context provider
export const ThemeContex = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContex.Provider


// custum hooks

export default function useTheme(){
    return useContext(ThemeContex)
}














