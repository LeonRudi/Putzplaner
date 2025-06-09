'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import MoonIcon from '../icons/moon.svg';
import SunIcon from '../icons/sun.svg';

export function DarkModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const current = theme === 'system' ? systemTheme : theme;

  return (
    <button
      aria-label="Toggle Dark Mode"
      className="transition-all flex justify-center items-center size-10 bg-foreground/5 hover:scale-105 hover:bg-foreground/10 rounded-2xl"
      onClick={() => setTheme(current === 'dark' ? 'light' : 'dark')}
    >
      {current === 'dark' ? <SunIcon/> : <MoonIcon/>}
    </button>
  );
}