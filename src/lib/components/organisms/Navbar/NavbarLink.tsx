import classNames from 'classnames';
import type { FC } from 'react';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { useNavbarContext } from './NavbarContext';

export interface NavbarLinkProps {
  active?: boolean;
  disabled?: boolean;
  href?: string;
  as?: React.ElementType;
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
    setIsOpen(false);
  };

  const LinkComponent = as || 'a';

  return (
    <li className="group relative">
      <LinkComponent
        href={href}
        className={classNames(theme.base, active && theme.active, disabled && theme.disabled)}
        {...props}
        onClick={handleOnClick}
      >
        {children}
        {withUnderlineEffect && (
          <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-lg bg-secondary-200 transition-all duration-500 group-hover:w-full"></span>
        )}
      </LinkComponent>
    </li>
  );
};
