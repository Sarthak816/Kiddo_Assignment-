import React, { createContext, useContext, ReactNode } from 'react';
import { ThemeConfig } from '../types';

export const defaultTheme: ThemeConfig = {
  primary: '#FF477E', // Playful Kiddo Pink/Coral
  secondary: '#FFD166', // Bright Yellow
  background: '#F7F8FA', // Soft app background
  surface: '#FFFFFF', // White cards
  accent: '#118AB2', // Deep blue accent
  text_primary: '#2B2D42',
  text_secondary: '#8D99AE',
  cta_background: '#FF477E',
  cta_text: '#FFFFFF',
  border_radius: { sm: 8, md: 16, lg: 24, xl: 32 },
  spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  typography: {
    heading: { fontSize: 26, fontWeight: '800', lineHeight: 34 },
    subheading: { fontSize: 18, fontWeight: '700', lineHeight: 24 },
    body: { fontSize: 14, fontWeight: '600', lineHeight: 20 },
    caption: { fontSize: 12, fontWeight: '500', lineHeight: 16 },
    cta: { fontSize: 16, fontWeight: '700', lineHeight: 24 },
  },
  animation: { duration_fast: 200, duration_normal: 300, duration_slow: 500, easing: 'ease-in-out' },
};

export const ThemeContext = createContext<ThemeConfig>(defaultTheme);

export const ThemeProvider: React.FC<{ theme?: ThemeConfig; children: ReactNode }> = ({
  theme = defaultTheme,
  children,
}) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

