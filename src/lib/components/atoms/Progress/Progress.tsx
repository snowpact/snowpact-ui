import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useId } from 'react';
import { twMerge } from 'tailwind-merge';
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

const getInsideText = (label: string, progress: number, labelProgress: boolean) => {
  if (labelProgress) {
    if (label && progress) {
      return `${label} - ${progress}%`;
    } else {
      return label ?? `${progress}%`;
    }
  } else {
    return label;
  }
};

export const Progress: FC<ProgressProps> = ({
  color = 'primary',
  label = 'progressbar',
  labelPosition = 'none',
  labelProgress = false,
  progress,
  size = 'md'
}): JSX.Element => {
  const id = useId();
  const theme = useTheme().theme.progress;

  const insideText = labelPosition === 'inside' && getInsideText(label, progress, labelProgress);

  return (
    <>
      <div className={theme.text} id={id} aria-label={label} aria-valuenow={progress} role="progressbar">
        {label && labelPosition === 'outside' && (
          <div className="mb-1 flex justify-between">
            <span>{label}</span>
            {labelProgress && <span>{progress}%</span>}
          </div>
        )}
        <div className={twMerge(classNames('w-full overflow-hidden', theme.base, theme.size[size]))}>
          <div
            className={twMerge(
              classNames('flex items-center justify-center ', theme.bar, theme.color[color], theme.size[size])
            )}
            style={{ width: `${progress}%` }}
          >
            {label && labelPosition === 'inside' && insideText}
          </div>
        </div>
      </div>
    </>
  );
};
