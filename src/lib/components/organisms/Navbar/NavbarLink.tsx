import type { FC } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { useNavbarContext } from './NavbarContext';

export interface NavbarLinkProps {
  active?: boolean;
  disabled?: boolean;
  href?: string;
  as?: React.ElementType;
  linkAsTo?: boolean;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  withUnderlineEffect?: boolean;
}

export const NavbarLink: FC<NavbarLinkProps> = ({
  active,
  disabled,
  href,
  children,
  as,
  linkAsTo,
  onClick,
  withUnderlineEffect,
  ...props
}) => {
  const theme = useTheme().theme.navbar.link;

  const { setIsOpen } = useNavbarContext();

  const handleOnClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (disabled) {
      e.preventDefault();
    }
    if (onClick) {
      onClick(e);
    }
    href && setIsOpen(false);
  };

  const LinkOrDivComponent = href ? as ?? 'a' : 'div';
  return (
    <li className="group relative w-full whitespace-nowrap text-center md:w-fit md:text-left">
      <LinkOrDivComponent
        href={linkAsTo ? undefined : href}
        to={linkAsTo && href ? href : undefined}
        className={twMerge(
          twMerge('block pr-4 pl-3 md:p-0 md:py-0 py-2 mx-auto', theme.base),
          twJoin(
            active && twMerge('bg-primary-700 text-white md:bg-transparent md:text-primary-700', theme.active),
            disabled && twMerge('text-gray-400 hover:cursor-not-allowed', theme.disabled)
          )
        )}
        {...props}
        onClick={handleOnClick}
      >
        <span className="w-full">
          {children}
          {withUnderlineEffect && (
            <span
              className={twMerge(
                'absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] rounded-lg bg-secondary-200 transition-all duration-500',
                theme.underline
              )}
            ></span>
          )}
        </span>
      </LinkOrDivComponent>
    </li>
  );
};
