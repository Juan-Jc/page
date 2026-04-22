import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from 'react';
import type { Theme, ThemeContextValue } from '../types';

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY_THEME = 'portfolio-theme';
const STORAGE_KEY_NEON = 'portfolio-neon-color';
const DEFAULT_NEON = '#a855f7';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY_THEME);
      return (stored as Theme) || 'dark';
    }
    return 'dark';
  });

  const [neonColor, setNeonColorState] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(STORAGE_KEY_NEON) || DEFAULT_NEON;
    }
    return DEFAULT_NEON;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem(STORAGE_KEY_THEME, theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty('--neon-color', neonColor);
    localStorage.setItem(STORAGE_KEY_NEON, neonColor);
  }, [neonColor]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const setNeonColor = useCallback((color: string) => {
    setNeonColorState(color);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, neonColor, toggleTheme, setNeonColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
