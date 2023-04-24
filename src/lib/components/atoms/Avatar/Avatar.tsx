import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { excludeClassName } from '../../../helpers/exclude';
import type { HIPositions, HISizes } from '../../bosons/HelloInternet/HelloInternetTheme';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export interface AvatarProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>> {
  alt?: string;
  img?: string;
  size?: string;
  status?: 'away' | 'busy' | 'offline' | 'online';
  statusPosition?: keyof HIPositions;
  placeholderInitials?: string;
}

export type AvatarSizes = Pick<HISizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl'>;

export const Avatar: FC<AvatarProps> = ({
  alt = '',
  children,
  img,
  size = '32px',
  status,
  statusPosition = 'top-left',
  placeholderInitials = '',
  ...props
}) => {
  const theirProps = excludeClassName(props);
  const theme = useTheme().theme.avatar;

  return (
    <div className="flex items-center" data-testid="sui-avatar-container" {...theirProps}>
      <div className={twMerge(classNames('relative flex items-center justify-center'))} data-testid="sui-avatar">
        <div className={twMerge(classNames('overflow-hidden', theme.block))}>
          {img ? (
            <img alt={alt} data-testid="sui-avatar-img" src={img} style={{ width: size, height: size }} />
          ) : placeholderInitials ? (
            <div
              style={{ width: size, height: size }}
              className={classNames('relative overflow-hidden inline-flex justify-center items-center w-full h-full')}
            >
              <span
                className={classNames(theme.text)}
                data-testid="sui-avatar-initials-placeholder"
                style={{ fontSize: `calc(${size} / 3)` }}
              >
                {placeholderInitials}
              </span>
            </div>
          ) : (
            <div data-testid="sui-avatar-img" style={{ width: size, height: size }}>
              <svg className={theme.svg} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
        {status && (
          <div
            className={twMerge(
              classNames('absolute', theme.statusBadge, theme.statusColor[status], theme.statusPosition[statusPosition])
            )}
            style={{
              width: `calc(${size} / 4)`,
              height: `calc(${size} / 4)`
            }}
          />
        )}
      </div>
      {children && <div>{children}</div>}
    </div>
  );
};
