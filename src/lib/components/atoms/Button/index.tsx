import classNames from 'classnames';
import type { ComponentProps, FC, ReactNode } from 'react';
import { excludeClassName } from '../../../helpers/exclude';
import type {
  HISizes,
  HIStateColors,
  HIButtonWidth,
  HIThemeColors,
} from '../../bosons/HelloInternet/HelloInternetTheme';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { PositionInButtonGroup } from './Button.theme';

export type ButtonColors = HIThemeColors & HIStateColors;
export type ButtonSizes = Pick<HISizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl'>;
export type ButtonWidths = Pick<HIButtonWidth, 'compact' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'>;

export interface ButtonProps extends Omit<ComponentProps<'button'>, 'className' | 'color'> {
  color?: keyof ButtonColors;
  href?: string;
  label?: ReactNode;
  pill?: boolean;
  positionInGroup?: keyof PositionInButtonGroup;
  size?: keyof ButtonSizes;
  width?: keyof ButtonWidths;
  disabled?: boolean;
  outline?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  color = 'primary',
  disabled = false,
  outline = false,
  href,
  label,
  pill = false,
  positionInGroup = 'none',
  size = 'md',
  width = 'md',
  ...props
}): JSX.Element => {
  const isLink = typeof href !== 'undefined';
  const theirProps = excludeClassName(props);

  const { button: theme } = useTheme().theme;

  const Component = isLink ? 'a' : 'button';

  return (
    <Component
      className={classNames(
        disabled && theme.disabled,
        theme.color[color],
        theme.position.outer[positionInGroup],
        theme.base,
        theme.pill[pill ? 'on' : 'off'],
        theme.outline[outline ? 'on' : 'off'],
        theme.widths[width],
        
      )}
      disabled={disabled}
      href={href}
      type={isLink ? undefined : 'button'}
      {...theirProps}
    >
      <span
        className={classNames(
          theme.position.inner[positionInGroup],
          theme.size[size],
        )}
      >
        <>
          {typeof children !== 'undefined' && children}
          {typeof label !== 'undefined' && (
            <span className={theme.label} data-testid="flowbite-button-label">
              {label}
            </span>
          )}
        </>
      </span>
    </Component>
  );
};
