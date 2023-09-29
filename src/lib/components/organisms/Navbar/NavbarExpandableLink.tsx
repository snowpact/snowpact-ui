import cs from 'classnames';
import type { FC } from 'react';
import { useRef, useState } from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { twJoin, twMerge } from 'tailwind-merge';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { ExpansionContainer } from './ExpansionContainer';
import { NavbarContext, useNavbarContext } from './NavbarContext';
import { NavbarLink } from './NavbarLink';

export interface NavbarExpandableLinkProps {
  label: string;
  href?: string;
  children?: React.ReactNode;
  arrowIcon?: boolean;
  withUnderlineEffect?: boolean;
  sideTitle?: boolean;
  customSideContent?: React.ReactNode;
}

export const NavbarExpandableLink: FC<NavbarExpandableLinkProps> = ({
  label,
  href,
  children,
  arrowIcon = true,
  withUnderlineEffect,
  sideTitle = false,
  customSideContent
}) => {
  const {
    expandedName,
    setExpandedName,
    expansion,
    setExpansion,
    expansionSideTitle,
    setExpansionSideTitle,
    expansionCustomSideContent,
    setExpansionCustomSideContent
  } = useNavbarContext();

  const theme = useTheme().theme.navbar.group;

  const [leaveTimeout, setLeaveTimeout] = useState<number | NodeJS.Timeout | null>(null);
  const isInTimeout = useRef<boolean>(false);

  const Icon = HiOutlineChevronDown;

  const toggleOpen = () => {
    setExpandedName && setExpandedName(expandedName === label ? undefined : label);
    setExpansion && setExpansion(expansion === null ? children : null);
    setExpansionSideTitle && setExpansionSideTitle(expansion === null ? sideTitle : false);
    setExpansionCustomSideContent && setExpansionCustomSideContent(expansion === null ? customSideContent : undefined);
  };

  const handleMouseEnter = () => {
    if (isInTimeout.current) {
      clearTimeout(leaveTimeout as NodeJS.Timeout);
      setLeaveTimeout(null);
    }
    console.log('entered');

    setExpandedName && setExpandedName(label);
    setExpansion && setExpansion(children);
    setExpansionSideTitle && setExpansionSideTitle(expansion === null ? sideTitle : false);
    setExpansionCustomSideContent && setExpansionCustomSideContent(expansion === null ? customSideContent : undefined);
  };

  const handleMouseLeave = () => {
    isInTimeout.current = true;
    setTimeout(() => {
      console.log('left');

      setExpandedName && setExpandedName(undefined);
      setExpansion && setExpansion(null);
      setExpansionSideTitle && setExpansionSideTitle(expansion === null ? sideTitle : false);
      setExpansionCustomSideContent &&
        setExpansionCustomSideContent(expansion === null ? customSideContent : undefined);
      isInTimeout.current = false;
    }, 100);
  };

  return (
    <NavbarContext.Provider
      value={{
        expansion,
        setExpansion,
        handleMouseEnter,
        handleMouseLeave,
        expansionSideTitle,
        setExpansionSideTitle,
        expansionCustomSideContent,
        setExpansionCustomSideContent
      }}
    >
      <li
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        className="flex w-full cursor-pointer flex-col border py-2 md:w-fit md:flex-row"
      >
        <div className="inline-block w-full items-center md:h-full">
          <div
            className={twMerge(
              cs('gap-1 items-center justify-center md:justify-start flex flex-row-reverse md:flex-row', theme.base)
            )}
          >
            <span className="relative flex items-center gap-1">
              <NavbarLink href={href} withUnderlineEffect={!!href && withUnderlineEffect}>
                {label}
              </NavbarLink>
              {arrowIcon && (
                <span
                  className={twMerge(
                    twJoin(
                      'transition duration-500 ease-in-out absolute -left-2 md:relative md:left-0',
                      theme.icon.base,
                      expandedName === label && twMerge(cs('-rotate-180 md:rotate-180', theme.icon.opened))
                    )
                  )}
                >
                  <Icon onClick={toggleOpen} />
                </span>
              )}
            </span>
          </div>
        </div>
        <div className={twMerge(twJoin('md:h-0 h-2', expandedName === label && 'hidden'))} />
        {expandedName === label && (
          <span className="block md:hidden">
            <ExpansionContainer>{children}</ExpansionContainer>
          </span>
        )}
      </li>
    </NavbarContext.Provider>
  );
};
