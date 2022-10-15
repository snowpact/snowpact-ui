import classNames from 'classnames';
import type { ComponentProps, FC, ReactNode } from 'react';
import { excludeClassName } from '../../../helpers/exclude';
import type {
  FlowbiteColors,
  FlowbiteGradientColors,
  FlowbiteGradientDuoToneColors,
  FlowbiteSizes,
} from '../../Flowbite/FlowbiteTheme';
import { useTheme } from '../../Flowbite/ThemeContext';
import { PositionInButtonGroup } from './Button.theme';

export interface ButtonProps extends Omit<ComponentProps<'button'>, 'className' | 'color'> {
  color?: keyof ButtonColors;
  outlineColor?: keyof ButtonOutlineColors;
  gradientDuoTone?: keyof ButtonGradientDuoToneColors;
  gradientMonochrome?: keyof ButtonGradientColors;
  href?: string;
  label?: ReactNode;
  outline?: boolean;
  pill?: boolean;
  positionInGroup?: keyof PositionInButtonGroup;
  size?: keyof ButtonSizes;
}

export type ButtonColors = Pick<FlowbiteColors, 'dark' | 'failure' | 'gray' | 'info' | 'light' | 'purple' | 'success' | 'warning'>;
export type ButtonOutlineColors = Pick<FlowbiteColors, 'gray' | 'default' | 'light'>;
export type ButtonGradientColors = FlowbiteGradientColors;
export type ButtonGradientDuoToneColors = FlowbiteGradientDuoToneColors;
export type ButtonSizes = Pick<FlowbiteSizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl'>;

export const Button: FC<ButtonProps> = ({
  children,
  color = 'info',
  outlineColor = 'light',
  disabled = false,
  gradientDuoTone,
  gradientMonochrome,
  href,
  label,
  outline = false,
  pill = false,
  positionInGroup = 'none',
  size = 'md',
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
        !gradientDuoTone && !gradientMonochrome && theme.color[color],
        gradientDuoTone && !gradientMonochrome && theme.gradientDuoTone[gradientDuoTone],
        !gradientDuoTone && gradientMonochrome && theme.gradient[gradientMonochrome],
        theme.position.outer[positionInGroup],
        outline && (theme.outline.color[outlineColor] ?? theme.outline.color.default),
        theme.base,
        theme.pill[pill ? 'on' : 'off'],
      )}
      disabled={disabled}
      href={href}
      type={isLink ? undefined : 'button'}
      {...theirProps}
    >
      <span
        className={classNames(
          theme.inner.base,
          theme.position.inner[positionInGroup],
          theme.outline[outline ? 'on' : 'off'],
          theme.outline.pill[outline && pill ? 'on' : 'off'],
          theme.size[size],
          outline && !theme.outline.color[outlineColor] && theme.inner.outline,
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
