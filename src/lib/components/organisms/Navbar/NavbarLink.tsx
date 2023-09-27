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

  const ContainerComponent = href ? as ?? 'a' : 'div';
  return (
    <li className="group relative w-full whitespace-nowrap text-center md:w-fit md:text-left">
      <ContainerComponent
        href={href}
        className={classNames(theme.base, active && theme.active, disabled && theme.disabled)}
        {...props}
        onClick={handleOnClick}
      >
        <span className="w-full">
          {children}
          {withUnderlineEffect && (
            <span className={classNames('absolute bottom-0 left-0 w-0 group-hover:w-full', theme.underline)}></span>
          )}
        </span>
      </ContainerComponent>
    </li>
  );
};
