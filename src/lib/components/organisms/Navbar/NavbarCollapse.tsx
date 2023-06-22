import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { excludeClassName } from '../../../helpers/exclude';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { useNavbarContext } from './NavbarContext';

export type NavbarCollapseProps = Omit<PropsWithChildren<ComponentProps<'div'>>, 'className'>;

export const NavbarCollapse: FC<NavbarCollapseProps> = ({ children, ...props }): JSX.Element => {
  const { isOpen } = useNavbarContext();

  const theme = useTheme().theme.navbar.collapse;
  const theirProps = excludeClassName(props);

  return (
    <div className={classNames(theme.base, !isOpen && 'hidden')} data-testid="flowbite-navbar-collapse" {...theirProps}>
      <ul className={theme.list}>{children}</ul>
    </div>
  );
};
