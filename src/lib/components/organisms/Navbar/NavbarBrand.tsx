import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { excludeClassName } from '../../../helpers/exclude';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { useNavbarContext } from './NavbarContext';

export type NavbarBrandProps = Omit<PropsWithChildren<ComponentProps<'a'>>, 'className'> & {
  as?: React.ElementType;
};

export const NavbarBrand: FC<NavbarBrandProps> = ({ children, href, as, ...props }) => {
  const theme = useTheme().theme.navbar;
  const theirProps = excludeClassName(props);

  const { setIsOpen } = useNavbarContext();

  const onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (props.onClick) {
      props.onClick(e);
    }
    setIsOpen(false);
  };

  const LinkComponent = as || 'a';

  return (
    <LinkComponent href={href} className={theme.brand} {...theirProps} onClick={onClick}>
      {children}
    </LinkComponent>
  );
};
