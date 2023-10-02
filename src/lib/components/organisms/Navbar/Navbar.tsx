import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useEffect, useState } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';
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

  useEffect(() => {
    if (isOpen) {
      disableBodyScroll(document.body);
    } else {
      enableBodyScroll(document.body);
    }
  }, [isOpen]);

  const theme = useTheme().theme.navbar;
  const fixedEffect = useStickyNavbar({ handleSticky: !!sticky, handleTop: sticky === 'transparent' });

  return (
    <NavbarContext.Provider value={{ isOpen, setIsOpen }}>
      <nav
        className={twMerge(
          twJoin(
            twMerge(
              'border-gray-200 flex min-h-[65px] z-50 w-full absolute',
              theme.base,
              'bg-primary-500',
              theme.background
            ),

            sticky === 'transparent' &&
              twJoin(
                'fixed flex top-0 left-0 right-0 transition linear delay-150',
                fixedEffect === NavbarSticky.STICKY_TOP && !isOpen && `bg-transparent ${theme.fixedTransparentStyle}`
              ),
            sticky === 'solid' && 'sticky top-0',
            isOpen && 'h-screen'
          )
        )}
      >
        <div
          className={twMerge(
            'md:flex-nowrap flex-wrap mx-auto flex items-center justify-between gap-5',
            theme.innerBase,
            twJoin(!fluid && 'container', fluid && 'px-2 sm:px-4')
          )}
        >
          {children}
        </div>
      </nav>
    </NavbarContext.Provider>
  );
};
