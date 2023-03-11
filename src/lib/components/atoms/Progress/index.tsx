import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useId } from 'react';
import { excludeClassName } from '../../../helpers/exclude';
import type { HISizes, HIStateColors, HIThemeColors } from '../../bosons/HelloInternet/HelloInternetTheme';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export interface ProgressProps extends PropsWithChildren<ComponentProps<'div'>> {
  color?: keyof ProgressColors;
  size?: keyof ProgressSizes;
  label?: string;
  labelPosition?: 'inside' | 'outside' | 'none';
  labelProgress?: boolean;
  progress: number;
}
export type ProgressColors = HIThemeColors & HIStateColors;

export type ProgressSizes = Pick<HISizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl'>;

export const Progress: FC<ProgressProps> = ({
  color = 'primary',
  label = 'progressbar',
  labelPosition = 'none',
  labelProgress = false,
  progress,
  size = 'md',
  ...props
}): JSX.Element => {
  const id = useId();
  const theme = useTheme().theme.progress;
  const theirProps = excludeClassName(props);

  return (
    <>
      <div id={id} aria-label={label} aria-valuenow={progress} role="progressbar" {...theirProps}>
        {label && labelPosition === 'outside' && (
          <div className={theme.label}>
            <span>{label}</span>
            {labelProgress && <span>{progress}%</span>}
          </div>
        )}
        <div className={classNames(theme.base, theme.size[size])}>
          <div
            className={classNames(theme.bar, theme.color[color], theme.size[size])}
            style={{ width: `${progress}%` }}
          >
            {label && labelPosition === 'inside' && label}
          </div>
        </div>
      </div>
    </>
  );
};
