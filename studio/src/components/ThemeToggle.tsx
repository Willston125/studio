'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2.5 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300 group"
            aria-label={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
        >
            {/* Icône Soleil */}
            <Sun
                size={20}
                className={`text-amber-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${theme === 'dark'
                        ? 'opacity-100 rotate-0 scale-100'
                        : 'opacity-0 -rotate-90 scale-50'
                    }`}
            />

            {/* Icône Lune */}
            <Moon
                size={20}
                className={`text-slate-700 dark:text-slate-300 transition-all duration-300 ${theme === 'light'
                        ? 'opacity-100 rotate-0 scale-100'
                        : 'opacity-0 rotate-90 scale-50'
                    }`}
            />

            {/* Effet glow au hover */}
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-amber-400/20 to-purple-400/20 blur-sm" />
        </button>
    );
}
