import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { excludeClassName } from '../../../helpers/exclude';
import { FlowbiteSizes, FlowbiteStateColors, HIThemeColors } from '../../bosons/HelloInternet/HelloInternetTheme';

import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export interface BadgeProps extends PropsWithChildren<Omit<ComponentProps<'span'>, 'className' | 'color'>> {
  color?: keyof BadgeColors;
  href?: string;
  icon?: FC<ComponentProps<'svg'>>;
  size?: keyof BadgeSizes;
}

export type BadgeColors = HIThemeColors & FlowbiteStateColors;

export type BadgeSizes = Pick<FlowbiteSizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl'>;

export const Badge: FC<BadgeProps> = ({
  children,
  color = 'info',
  href,
  icon: Icon,
  size = 'sm',
  ...props
}): JSX.Element => {
  const theirProps = excludeClassName(props);

  const theme = useTheme().theme.badge;

  const Content = (): JSX.Element => (
    <span
      className={classNames(theme.base, theme.color[color], theme.icon[Icon ? 'on' : 'off'], theme.size[size])}
      data-testid="flowbite-badge"
      {...theirProps}
    >
      {Icon && <Icon aria-hidden className={theme.icon.size[size]} data-testid="flowbite-badge-icon" />}
      {children && <span>{children}</span>}
    </span>
  );

  return href ? (
    <a className={theme.href} href={href}>
      <Content />
    </a>
  ) : (
    <Content />
  );
};
