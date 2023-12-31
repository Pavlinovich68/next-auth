"use client"

import {createContext, useState} from "react";

// @ts-ignore
export const ThemeContext = createContext()

export const ThemeProvider = ({children}: any) => {
    const [mode, setMode] = useState("dark");
    const toggle = () => setMode(prev => prev === "dark" ? "light" : "dark");
    return (
        <ThemeContext.Provider value={{toggle, mode}}>
            <div className={`theme ${mode}`}>{children}</div>
        </ThemeContext.Provider>
    )
}