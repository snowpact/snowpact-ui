import type { FC, HTMLAttributes } from 'react';
import { useMemo } from 'react';
import { mergeDeep } from '../../../helpers/mergeDeep';
import defaultTheme from '../../../theme/default';
import type { CustomHelloInternetTheme, HelloInternetTheme } from './HelloInternetTheme';
import { ThemeContext } from './ThemeContext';

export interface ThemeProps {
  theme?: CustomHelloInternetTheme;
  usePreferences?: boolean;
}

interface HelloInternetProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  theme?: ThemeProps;
}

export const HelloInternet: FC<HelloInternetProps> = ({ children, theme = {} }) => {
  const { theme: customTheme = {} } = theme;

  const mergedTheme = mergeDeep<HelloInternetTheme>(defaultTheme, customTheme);

  const themeContextValue = useMemo(
    () => ({
      theme: mergedTheme
    }),
    [mergedTheme]
  );

  return <ThemeContext.Provider value={themeContextValue}>{children}</ThemeContext.Provider>;
};
