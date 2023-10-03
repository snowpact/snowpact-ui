import type { FC } from 'react';
import { useState } from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { twJoin, twMerge } from 'tailwind-merge';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { NavbarLink } from './NavbarLink';

export interface NavbarGroupProps {
  label: React.ReactNode;
  children?: React.ReactNode;
  arrowIcon?: boolean;
  withUnderlineEffect?: boolean;
  topPositionValue?: string;
}

export const NavbarGroup: FC<NavbarGroupProps> = ({
  label,
  children,
  arrowIcon = true,
  withUnderlineEffect,
  topPositionValue = '65px'
}) => {
  const theme = useTheme().theme.navbar.group;

  const [isGroupOpen, setIsGroupOpen] = useState(false);
  const [leaveTimeout, setLeaveTimeout] = useState<number | NodeJS.Timeout | null>(null);

  const Icon = HiOutlineChevronDown;

  const toggleGroup = () => {
    setIsGroupOpen(!isGroupOpen);
  };

  const handleMouseEnter = () => {
    if (leaveTimeout) {
      clearTimeout(leaveTimeout as NodeJS.Timeout);
      setLeaveTimeout(null);
    }
    setIsGroupOpen(true);
  };

  const handleMouseLeave = () => {
    setLeaveTimeout(
      setTimeout(() => {
        setIsGroupOpen(false);
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
      className="flex w-full cursor-pointer flex-col md:h-full md:w-fit md:flex-row"
    >
      <div className="inline-block w-full items-center md:flex md:h-full" onClick={toggleGroup}>
        <div
          className={twMerge(
            'gap-1 items-center justify-center md:justify-start flex flex-row-reverse md:flex-row',
            theme.base
          )}
        >
          <span className="relative flex items-center gap-1">
            <NavbarLink withUnderlineEffect={withUnderlineEffect}>{label}</NavbarLink>
            {arrowIcon && (
              <span
                className={twMerge(
                  twJoin(
                    'transition duration-500 ease-in-out absolute -left-2 md:relative md:left-0',
                    theme.icon.base,
                    isGroupOpen && twMerge('-rotate-180 md:rotate-180', theme.icon.opened)
                  )
                )}
              >
                <Icon />
              </span>
            )}
          </span>
        </div>
      </div>
      <div className={twMerge(twJoin('md:h-0 h-2', !isGroupOpen && 'hidden'))} />
      <div
        id="container"
        className={twMerge(
          twJoin(
            'cursor-default md:px-5 md:py-2.5 md:fixed w-full md:rounded-t-none rounded-t-md rounded-b-md bg-slate-100 md:items-start items-center flex flex-col left-0 transition duration-300 ease-in-out overflow-hidden top-0 md:-z-10',
            theme.container.base,
            !isGroupOpen && twMerge('md:-translate-y-[50%] md:scale-y-0 opacity-0 md:h-fit h-0', theme.container.closed)
          )
        )}
        style={style}
      >
        {children}
      </div>
    </li>
  );
};
