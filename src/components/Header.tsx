'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Briefcase, Moon, Sun } from 'lucide-react';

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="container-custom py-4 flex items-center justify-between">
        {/* Logo/Title */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-ai rounded-lg flex items-center justify-center text-white font-bold text-lg">
            <Briefcase size={24} className="text-white" />
          </div>
          <h1 className="gradient-text text-2xl font-bold hidden sm:block">
            Elad Ariel Portfolio
          </h1>
          <h1 className="gradient-text text-xl font-bold sm:hidden">
            Portfolio
          </h1>
        </div>

        {/* Theme Toggle - Two Button Style */}
        {mounted && (
          <div className="flex gap-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setTheme('light')}
              className={`p-2 rounded-md transition-all ${
                theme === 'light'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              title="Light Mode"
              aria-label="Light Mode"
            >
              <Sun size={18} />
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`p-2 rounded-md transition-all ${
                theme === 'dark'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              title="Dark Mode"
              aria-label="Dark Mode"
            >
              <Moon size={18} />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
