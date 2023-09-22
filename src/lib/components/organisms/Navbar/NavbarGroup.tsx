import cs from 'classnames';
import type { FC } from 'react';
import { useState } from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { useNavbarContext } from './NavbarContext';
import { NavbarLink } from './NavbarLink';

export interface NavbarGroupProps {
  label: React.ReactNode;
  href?: string;
  children?: React.ReactNode;
  arrowIcon?: boolean;
  withUnderlineEffect?: boolean;
}

export const NavbarGroup: FC<NavbarGroupProps> = ({ label, href, children, arrowIcon = true, withUnderlineEffect }) => {
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
      }, 500)
    );
  };

  const { height } = useNavbarContext();

  const style = {
    top: `${height}px`,
    '@media (min-width: 768px)': {
      top: '0'
    }
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="w-full">
      <li className="relative inline-block w-full items-center">
        <div className={twMerge(cs(theme.base, 'flex flex-row-reverse md:flex-row'))}>
          <div className="relative flex items-center">
            <NavbarLink href={href} withUnderlineEffect={!!href && withUnderlineEffect}>
              {label}
            </NavbarLink>
            {arrowIcon && (
              <Icon onClick={toggleGroup} className={twMerge(cs(theme.icon.base, isOpen && theme.icon.opened))} />
            )}
          </div>
        </div>
      </li>
      <div className={twMerge(cs(theme.container.base, !isOpen && theme.container.opened))} style={style}>
        {children}
      </div>
    </div>
  );
};
