import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { LinkComponent } from '../../bosons/LinkComponent/LinkComponent';

export interface FooterLinkProps extends Omit<PropsWithChildren<ComponentProps<'a'>>, 'className'> {
  as?: React.ElementType;
  href: string;
}

export const FooterLink: FC<FooterLinkProps> = ({ children, href, as }) => {
  const theme = useTheme().theme.footer.groupLink.link;

  return (
    <li className={theme.base}>
      <LinkComponent href={href} className={theme.href} as={as}>
        {children}
      </LinkComponent>
    </li>
  );
};
