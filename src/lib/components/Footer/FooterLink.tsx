import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../bosons/HelloInternet/ThemeContext';

export interface FooterLinkProps extends Omit<PropsWithChildren<ComponentProps<'a'>>, 'className'> {
  as?: React.ElementType;
  href: string;
}

export const FooterLink: FC<FooterLinkProps> = ({ children, href, as }) => {
  const theme = useTheme().theme.footer.groupLink.link;

  const LinkComponent = as || 'a';

  return (
    <li className={theme.base}>
      <LinkComponent href={href} className={theme.href}>
        {children}
      </LinkComponent>
    </li>
  );
};
