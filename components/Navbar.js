import React from 'react'
import { useTheme } from 'next-themes'

const Navbar = () => {

    const { systemTheme, theme, setTheme } = useTheme()

    const renderThemeChanger = () => {
        const currentTheme = theme === 'system' ? systemTheme : theme;

        if (currentTheme === 'dark') {
            return (
                <h1 className="text-2xl" role="button" onClick={() => setTheme('light')}>🌞</h1>
            )
        } else {
            return (
                <h1 className="text-2xl" role="button" onClick={() => setTheme('dark')}>🌙</h1>
            )
        }
    }

    return (
        <div className="h-10 w-full fixed top-0 flex items-center justify-evenly">
            <h1>Hello World</h1>
            {renderThemeChanger()}
        </div>
    )
}

export default Navbar
