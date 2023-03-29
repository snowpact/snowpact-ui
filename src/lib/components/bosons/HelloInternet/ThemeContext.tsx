/* eslint-disable react-hooks/rules-of-hooks */
import type { FC, ReactNode } from 'react';
import { createContext, useContext } from 'react';
import defaultTheme from '../../../theme/default';
import type { HelloInternetTheme } from './HelloInternetTheme';

interface ThemeContextProps {
  theme: HelloInternetTheme;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: defaultTheme
});

interface ThemeProviderProps {
  children: ReactNode;
  value: ThemeContextProps;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, value }) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export function useTheme(): ThemeContextProps {
  return useContext(ThemeContext);
}
