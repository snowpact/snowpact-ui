import React from 'react';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export interface HeroCallToActionsProps {
  children: JSX.Element | JSX.Element[];
}

export const HeroCallToActions: React.FC<HeroCallToActionsProps> = ({ children }) => {
  const { hero: theme } = useTheme().theme;

  return <div className={theme.ctaWrapper}>{children}</div>;
};
