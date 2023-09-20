import cs from 'classnames';
import type { FC } from 'react';
import { useState } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronRight } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { NavbarLink } from './NavbarLink';

export interface NavbarDropdownProps {
  label: React.ReactNode;
  href?: string;
  children?: React.ReactNode;
  direction?: 'down' | 'right';
  arrowIcon?: boolean;
}

export const NavbarDropdown: FC<NavbarDropdownProps> = ({
  label,
  href,
  children,
  direction = 'down',
  arrowIcon = true
}) => {
  const theme = useTheme().theme.navbar.dropdown;

  const [isOpen, setIsOpen] = useState(false);

  const Icon = direction === 'down' ? HiOutlineChevronDown : HiOutlineChevronRight;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <li
        className="relative inline-block w-full items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={twMerge(
            cs(theme.base, 'flex flex-row-reverse items-center justify-center md:flex-row md:justify-start')
          )}
        >
          <NavbarLink href={href}>{label}</NavbarLink>
          {arrowIcon && (
            <>
              <span className="flex-none md:flex-1" />
              <Icon
                onClick={toggleDropdown}
                className={twMerge(
                  cs(
                    theme.iconAnimations.base,
                    isOpen && theme.iconAnimations.opened,
                    direction === 'right' && !isOpen && theme.iconAnimations.rightClosed,
                    direction === 'right' && isOpen && theme.iconAnimations.rightOpen
                  )
                )}
              />
            </>
          )}
        </div>
        <ul
          className={twMerge(
            cs(theme.container.base, direction === 'right' && theme.container.rightDirection, !isOpen && 'hidden')
          )}
        >
          {children}
        </ul>
      </li>
    </>
  );
};
