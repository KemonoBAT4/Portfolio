'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'minimal' | 'vaporwave';

// create the context
const ThemeContext = createContext<{
    theme: Theme;
    toggleTheme: () => void;
}>({ theme: 'minimal', toggleTheme: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('minimal');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme(prev => (prev === 'minimal' ? 'vaporwave' : 'minimal'));

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);