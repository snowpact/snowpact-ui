import classNames from 'classnames';
import type { ComponentProps, FC } from 'react';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export interface FooterProps extends Omit<ComponentProps<'footer'>, 'className'> {
  bgDark?: boolean;
  container?: boolean;
}

export const Footer: FC<FooterProps> = ({ children, bgDark = false, container = false }): JSX.Element => {
  const theme = useTheme().theme.footer;
  return (
    <footer
      data-testid="flowbite-footer"
      className={classNames(theme.base, bgDark && theme.bgDark, container && theme.container)}
    >
      {children}
    </footer>
  );
};
