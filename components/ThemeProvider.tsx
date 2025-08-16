'use client';
import React, { createContext, useContext, useEffect } from 'react';
import { Theme, defaultTheme, applyTheme } from '@/lib/theme';

interface ThemeContextType {
  theme: Theme;
  updateTheme: (newTheme: Partial<Theme>) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  updateTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    applyTheme();
  }, []);

  const updateTheme = (newTheme: Partial<Theme>) => {
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme: defaultTheme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
