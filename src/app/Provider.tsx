"use client";

import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from 'react'
import { ProviderProps } from '../../types';


const Provider = ({children} : ProviderProps) => {

    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted){
        return <>{children}</>
    }

    return (
        <ThemeProvider enableSystem attribute='class'>
            {children}
        </ThemeProvider>
    )
}

export default Provider