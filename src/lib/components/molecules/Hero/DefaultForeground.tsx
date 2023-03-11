import React from 'react';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export interface DefaultForegroundProps {
  title: string;
  subtitle?: string;
  cta?: React.ReactNode;
}

export const DefaultForeground: React.FC<DefaultForegroundProps> = ({ title, subtitle, cta }) => {
  const { hero: theme } = useTheme().theme;

  return (
    <div className={theme.foreground}>
      <h1 className={theme.title}>{title}</h1>
      {subtitle && <p className={theme.subtitle}>{subtitle}</p>}
      {cta && cta}
    </div>
  );
};
