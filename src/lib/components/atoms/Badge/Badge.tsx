import classNames from 'classnames';
import type { FC } from 'react';
import { LinkOrDiv } from '../../bosons';
import type { HIStateColors, HIThemeColors } from '../../bosons/HelloInternet/HelloInternetTheme';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export interface BadgeProps {
  children?: string;
  color?: keyof BadgeColors;
  href?: string;
  icon?: React.ReactNode;
}

export type BadgeColors = HIThemeColors & HIStateColors;

export const Badge: FC<BadgeProps> = ({ children, color = 'primary', href, icon }): JSX.Element => {
  const theme = useTheme().theme.badge;

  return (
    <LinkOrDiv
      href={href}
      className={classNames('flex items-center gap-1 px-2 py-1', theme.base, theme.text, theme.color[color])}
      data-testid="sui-badge"
    >
      {icon}
      {children && <span>{children}</span>}
    </LinkOrDiv>
  );
};
