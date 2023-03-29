import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { NavbarContext } from './NavbarContext';
import { NavbarSticky, useStickyNavbar } from './useFixedNavbar';

export interface NavbarComponentProps extends Omit<PropsWithChildren<ComponentProps<'nav'>>, 'className'> {
  menuOpen?: boolean;
  fluid?: boolean;
  sticky?: 'transparent' | 'solid';
}

export const Navbar: FC<NavbarComponentProps> = ({ children, menuOpen, fluid = false, sticky }) => {
  const [isOpen, setIsOpen] = useState(menuOpen);

  const theme = useTheme().theme.navbar;
  const fixedEffect = useStickyNavbar({ handleSticky: !!sticky, handleTop: sticky === 'transparent' });

  return (
    <NavbarContext.Provider value={{ isOpen, setIsOpen }}>
      <nav
        className={twMerge(
          classNames(theme.base, theme.background, [
            sticky === 'transparent' && 'fixed top-0 left-0 right-0 transition linear delay-150',
            sticky === 'solid' && 'sticky top-0',
            fixedEffect === NavbarSticky.STICKY_TOP && 'bg-transparent',
            fixedEffect === NavbarSticky.STICKY_TOP && theme.fixedTransparentStyle,
            fixedEffect === NavbarSticky.STICKY_STICKED
          ])
        )}
      >
        <div className={classNames(theme.innerBase, [!fluid && 'container', fluid && 'px-2 sm:px-4'])}>{children}</div>
      </nav>
    </NavbarContext.Provider>
  );
};
