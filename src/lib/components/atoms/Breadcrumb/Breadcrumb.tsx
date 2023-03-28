import type { ComponentProps, FC } from 'react';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export const Breadcrumb: FC<ComponentProps<'nav'>> = ({ children, ...props }) => {
  const theme = useTheme().theme.breadcrumb;

  return (
    <nav aria-label="Breadcrumb" {...props}>
      <ol className={theme.list}>{children}</ol>
    </nav>
  );
};
