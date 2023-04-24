import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export interface CopyrightProps extends Omit<PropsWithChildren<ComponentProps<'span'>>, 'className'> {
  href?: string;
  by: string;
  year?: number;
  as?: React.ElementType;
}

export const FooterCopyright: FC<CopyrightProps> = ({ href, by, year, as }) => {
  const theme = useTheme().theme.footer.copyright;

  const LinkComponent = as || 'a';

  return (
    <div>
      <span className={theme.base} data-testid="flowbite-footer-copyright">
        © {year}
        {href ? (
          <LinkComponent href={href} className={theme.href} as={as}>
            {by}
          </LinkComponent>
        ) : (
          <span data-testid="flowbite-footer-copyright-span" className={theme.span}>
            {by}
          </span>
        )}
      </span>
    </div>
  );
};
