import type { ComponentProps, FC } from 'react';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export const Breadcrumb: FC<ComponentProps<'nav'>> = ({ children }) => {
  const theme = useTheme().theme.breadcrumb;

  return (
    <nav aria-label="Breadcrumb" className={theme.base}>
      <ol className="flex items-center">{children}</ol>
    </nav>
  );
};
