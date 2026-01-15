'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Briefcase } from 'lucide-react';

export function Header() {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Force dark mode on mount
    setTheme('dark');
  }, [setTheme]);

  if (!mounted) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="container-custom py-4 flex items-center justify-between">
        {/* Logo/Title */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-ai rounded-lg flex items-center justify-center text-white font-bold text-lg">
            <Briefcase size={24} />
          </div>
          <h1 className="gradient-text text-2xl font-bold hidden sm:block">
            Elad Ariel Portfolio
          </h1>
          <h1 className="gradient-text text-xl font-bold sm:hidden">
            Portfolio
          </h1>
        </div>
      </div>
    </header>
  );
}
