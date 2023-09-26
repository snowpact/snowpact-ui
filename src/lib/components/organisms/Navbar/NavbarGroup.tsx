import cs from 'classnames';
import type { FC } from 'react';
import { useState } from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { NavbarLink } from './NavbarLink';

export interface NavbarGroupProps {
  label: React.ReactNode;
  href?: string;
  children?: React.ReactNode;
  arrowIcon?: boolean;
  withUnderlineEffect?: boolean;
  topPositionValue?: string;
}

export const NavbarGroup: FC<NavbarGroupProps> = ({
  label,
  href,
  children,
  arrowIcon = true,
  withUnderlineEffect,
  topPositionValue = '65px'
}) => {
  const theme = useTheme().theme.navbar.group;

  const [isOpen, setIsOpen] = useState(false);
  const [leaveTimeout, setLeaveTimeout] = useState<number | NodeJS.Timeout | null>(null);

  const Icon = HiOutlineChevronDown;

  const toggleGroup = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    if (leaveTimeout) {
      clearTimeout(leaveTimeout as NodeJS.Timeout);
      setLeaveTimeout(null);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setLeaveTimeout(
      setTimeout(() => {
        setIsOpen(false);
      }, 100)
    );
  };

  const style = {
    top: topPositionValue,
    '@media (min-width: 768px)': {
      top: '0'
    }
  };

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex w-full cursor-pointer flex-col py-2 md:w-fit md:flex-row"
    >
      <div className="inline-block w-full items-center md:h-full">
        <div className={twMerge(cs(theme.base, 'flex flex-row-reverse md:flex-row'))}>
          <span className="relative flex items-center gap-1">
            <NavbarLink href={href} withUnderlineEffect={!!href && withUnderlineEffect}>
              {label}
            </NavbarLink>
            {arrowIcon && (
              <span className={twMerge(cs(theme.icon.base, isOpen && theme.icon.opened))}>
                <Icon onClick={toggleGroup} />
              </span>
            )}
          </span>
        </div>
      </div>
      <div className={twMerge(cs('md:h-0 h-2', !isOpen && 'hidden'))} />
      <div
        className={twMerge(cs('cursor-default', theme.container.base, !isOpen && theme.container.opened))}
        style={style}
      >
        {children}
      </div>
    </li>
  );
};
