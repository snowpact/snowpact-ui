import type { FC } from 'react';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export const DropdownDivider: FC = () => {
  const theme = useTheme().theme.dropdown.floating.divider;

  return <div className={theme} />;
};
