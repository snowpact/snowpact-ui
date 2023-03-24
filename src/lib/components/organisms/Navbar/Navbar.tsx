import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useState } from 'react';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { NavbarContext } from './NavbarContext';
import { NavbarFixed, useFixedNavbar } from './useFixedNavbar';

export interface NavbarComponentProps extends Omit<PropsWithChildren<ComponentProps<'nav'>>, 'className'> {
  menuOpen?: boolean;
  fluid?: boolean;
  fixed?: boolean;
}

export const Navbar: FC<NavbarComponentProps> = ({ children, menuOpen, fixed, fluid = false }) => {
  const [isOpen, setIsOpen] = useState(menuOpen);

  const theme = useTheme().theme.navbar;
  const fixedEffect = useFixedNavbar(fixed);

  return (
    <NavbarContext.Provider value={{ isOpen, setIsOpen }}>
      <nav
        className={classNames(theme.base, [
          fixedEffect !== NavbarFixed.FIXED_OFF && 'fixed top-0 left-0 right-0 transition linear delay-150',
          fixedEffect === NavbarFixed.FIXED_TOP && 'bg-transparent',
          fixedEffect === NavbarFixed.FIXED_ACTIVE && 'bg-white'
        ])}
      >
        <div className={classNames(theme.innerBase, [!fluid && 'container', fluid && 'px-2 sm:px-4'])}>{children}</div>
      </nav>
    </NavbarContext.Provider>
  );
};
