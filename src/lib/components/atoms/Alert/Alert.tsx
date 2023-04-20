import classNames from 'classnames';
import type { FC, ReactNode } from 'react';
import { HiX } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import type { HIStateColors, HIThemeColors } from '../../bosons/HelloInternet/HelloInternetTheme';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { getIconFromColor } from './Alert.theme';

export interface AlertProps {
  title: string;
  additionalContent?: ReactNode;
  color?: keyof AlertColors;
  onDismiss?: boolean | (() => void);
}

export type AlertColors = HIThemeColors & HIStateColors;

export const Alert: FC<AlertProps> = ({ title, additionalContent, color = 'info', onDismiss }) => {
  const theme = useTheme().theme.alert;
  const icon = getIconFromColor(color);

  return (
    <div className={classNames('flex flex-col gap-1 p-4', theme.block, theme.text, theme.color[color])} role="alert">
      <div className="flex items-center gap-2">
        {icon && <div className="place-self-start">{icon}</div>}
        <span>{title}</span>
        {typeof onDismiss === 'function' && (
          <button
            aria-label="Dismiss"
            className={twMerge(
              classNames('-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 p-1.5', theme.closingButton, theme.color[color])
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
