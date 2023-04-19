import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react';
import { HiX } from 'react-icons/hi';
import type { HIStateColors, HIThemeColors } from '../../bosons/HelloInternet/HelloInternetTheme';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export interface AlertProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'color'>> {
  additionalContent?: ReactNode;
  color?: keyof AlertColors;
  icon?: FC<ComponentProps<'svg'>>;
  onDismiss?: boolean | (() => void);
  withBorderAccent?: boolean;
}

export type AlertColors = HIThemeColors & HIStateColors;

export const Alert: FC<AlertProps> = ({
  additionalContent,
  children,
  color = 'info',
  icon: Icon,
  onDismiss,
  withBorderAccent
}) => {
  const theme = useTheme().theme.alert;

  return (
    <div
      className={classNames(
        'flex flex-col gap-2 p-4',
        theme.block,
        theme.text,
        theme.color[color],
        withBorderAccent && theme.borderAccent
      )}
      role="alert"
    >
      <div className="flex items-center">
        {Icon && <Icon className={theme.icon} />}
        <div>{children}</div>
        {typeof onDismiss === 'function' && (
          <button
            aria-label="Dismiss"
            className={classNames(
              '-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 p-1.5',
              theme.closingButton,
              theme.color[color]
            )}
            onClick={onDismiss}
            type="button"
          >
            <HiX aria-hidden className="h-5 w-5" />
          </button>
        )}
      </div>
      {additionalContent && <div>{additionalContent}</div>}
    </div>
  );
};
