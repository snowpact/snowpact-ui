import React from 'react';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export interface HeroForegroundProps {
  title: string;
  subtitle?: string;
}

export const HeroForeground: React.FC<HeroForegroundProps> = ({ title, subtitle }) => {
  const { hero: theme } = useTheme().theme;

  return (
    <>
      <h1 className={theme.title}>{title}</h1>
      {subtitle && <p className={theme.subtitle}>{subtitle}</p>}
    </>
  );
};
