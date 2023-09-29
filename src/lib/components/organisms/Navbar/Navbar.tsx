import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import cs from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useEffect, useState } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { ExpansionContainer } from './ExpansionContainer';
import { NavbarContext } from './NavbarContext';
import { NavbarLink } from './NavbarLink';
import { NavbarSticky, useStickyNavbar } from './useFixedNavbar';

export interface NavbarComponentProps extends Omit<PropsWithChildren<ComponentProps<'nav'>>, 'className'> {
  menuOpen?: boolean;
  fluid?: boolean;
  sticky?: 'transparent' | 'solid';
}

export const Navbar: FC<NavbarComponentProps> = ({ children, menuOpen, fluid = false, sticky }) => {
  const [isOpen, setIsOpen] = useState(menuOpen);
  const [expandedName, setExpandedName] = useState<string | undefined>(undefined);
  const [expansion, setExpansion] = useState<React.ReactNode | null>(null);
  const [expansionSideTitle, setExpansionSideTitle] = useState<boolean>(false);
  const [expansionCustomSideContent, setExpansionCustomSideContent] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    if (isOpen) {
      disableBodyScroll(document.body);
    } else {
      enableBodyScroll(document.body);
    }
  }, [isOpen]);

  const theme = useTheme().theme.navbar;
  const fixedEffect = useStickyNavbar({ handleSticky: !!sticky, handleTop: sticky === 'transparent' });
  // console.log('expansion', expansion);
  // console.log('expansionSideTitle', expansionSideTitle);
  // console.log('expansionCustomSideContent', expansionCustomSideContent);
  // console.log('expandedName', expandedName);

  const getSideContent = (sideTitle: boolean, label: string, href?: string, customContent?: React.ReactNode) => {
    if (sideTitle) {
      return (
        <NavbarLink href={href} withUnderlineEffect={!!href}>
          {label}
        </NavbarLink>
      );
    } else {
      return customContent;
    }
  };

  return (
    <NavbarContext.Provider
      value={{
        isOpen,
        setIsOpen,
        expandedName,
        setExpandedName,
        expansion,
        setExpansion,
        expansionSideTitle,
        setExpansionSideTitle,
        expansionCustomSideContent,
        setExpansionCustomSideContent
      }}
    >
      <nav>
        <div
          className={twMerge(
            twJoin(
              cs(
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
              twJoin(
                'md:flex-nowrap flex-wrap mx-auto flex items-center justify-between gap-5',
                theme.innerBase,
                !fluid && 'container',
                fluid && 'px-2 sm:px-4'
              )
            )}
          >
            {children}
          </div>
        </div>
        <span className="hidden md:block">
          <ExpansionContainer sideContent={expansionCustomSideContent}>{expansion}</ExpansionContainer>
        </span>
      </nav>
    </NavbarContext.Provider>
  );
};
