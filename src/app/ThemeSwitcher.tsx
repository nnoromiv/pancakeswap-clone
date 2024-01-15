"use client";
import { useTheme } from "next-themes"
import { ToggleSwitch } from "../../components";


export default function ThemeSwitcher(){
    const {systemTheme, theme, setTheme} = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme

    function handleToggle(){
        if(currentTheme === 'dark'){
            setTheme('light')
        } else if (currentTheme === 'light') {
            setTheme('dark')
        } else {
            setTheme('system')
        }
    }

    return (
        <>
            {
                currentTheme === 'dark' ?
                <ToggleSwitch super={{ clickFunction: handleToggle }} toggleDarkStyles="translate-x-[1.5rem]" />
                :
                <ToggleSwitch super={{ clickFunction: handleToggle }} toggleDarkStyles="" />
            }
        </>
    )
}