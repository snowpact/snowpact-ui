import type { FC, HTMLAttributes } from 'react';
import { useEffect, useMemo } from 'react';
import type { DeepPartial } from '../../';
import { mergeDeep } from '../../../helpers/mergeDeep';
import windowExists from '../../../helpers/window-exists';
import defaultTheme from '../../../theme/default';
import type { HelloInternetTheme } from './HelloInternetTheme';
import { ThemeContext, useThemeMode } from './ThemeContext';

export interface ThemeProps {
  dark?: boolean;
  theme?: DeepPartial<HelloInternetTheme>;
  usePreferences?: boolean;
}

interface HelloInternetProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  theme?: ThemeProps;
}

export const HelloInternet: FC<HelloInternetProps> = ({ children, theme = {} }) => {
  const { theme: customTheme = {}, dark, usePreferences = true } = theme;
  const [mode, setMode, toggleMode] = useThemeMode(usePreferences);

  const mergedTheme = mergeDeep<HelloInternetTheme>(defaultTheme, customTheme);

  useEffect(() => {
    if (dark) {
      if (setMode != null) {
        setMode('dark');
      }

      if (windowExists()) {
        document.documentElement.classList.add('dark');
      }
    }
  }, [dark, setMode]);

  const themeContextValue = useMemo(
    () => ({
      theme: mergedTheme,
      mode,
      toggleMode,
    }),
    [mode, toggleMode, mergedTheme],
  );

  return <ThemeContext.Provider value={themeContextValue}>{children}</ThemeContext.Provider>;
};

