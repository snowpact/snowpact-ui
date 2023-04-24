import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { excludeClassName } from '../../../helpers/exclude';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { useNavbarContext } from './NavbarContext';

export interface NavbarLinkProps extends Omit<PropsWithChildren<ComponentProps<'a'>>, 'className'> {
  active?: boolean;
  disabled?: boolean;
  href?: string;
  as?: React.ElementType;
}

export const NavbarLink: FC<NavbarLinkProps> = ({ active, disabled, href, children, as, ...props }) => {
  const theme = useTheme().theme.navbar.link;
  const theirProps = excludeClassName(props);

  const { setIsOpen } = useNavbarContext();

  const onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (disabled) {
      e.preventDefault();
    }
    if (props.onClick) {
      props.onClick(e);
    }
    setIsOpen(false);
  };

  const LinkComponent = as || 'a';

  return (
    <li>
      <LinkComponent
        href={href}
        className={classNames(
          theme.base,
          {
            [theme.active.on]: active,
            [theme.active.off]: !active && !disabled
          },
          theme.disabled[disabled ? 'on' : 'off']
        )}
        {...theirProps}
        onClick={onClick}
        as={as}
      >
        {children}
      </LinkComponent>
    </li>
  );
};
