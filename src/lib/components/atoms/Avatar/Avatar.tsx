import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { excludeClassName } from '../../../helpers/exclude';
import type { HIPositions } from '../../bosons/HelloInternet/HelloInternetTheme';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export interface AvatarProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>> {
  alt?: string;
  img?: string;
  size?: string;
  status?: 'away' | 'busy' | 'offline' | 'online';
  statusPosition?: keyof HIPositions;
  placeholderInitials?: string;
}

export const AVATAR_MINIMUM_SIZE = '30px';
const STATUS_TRANSLATION_FACTOR = 0.6;

const getStatusPosition = (position: keyof HIPositions, size: string) => {
  const translationValue = `calc(${size} * ${STATUS_TRANSLATION_FACTOR})`;
  const negativeTranslationValue = `calc(${size} * ${STATUS_TRANSLATION_FACTOR} * -1)`;
  const translationValueMax = `calc(${AVATAR_MINIMUM_SIZE} * ${STATUS_TRANSLATION_FACTOR})`;
  const negativeTranslationValueMax = `calc(${AVATAR_MINIMUM_SIZE} * ${STATUS_TRANSLATION_FACTOR} * -1)`;
  const diagonalFactor = Math.sqrt(2) / 2;
  const diagonalTranslationValue = `calc(${translationValue} * ${diagonalFactor})`;
  const negativeDiagonalTranslationValue = `calc(${translationValue} * ${diagonalFactor} * -1)`;
  const diagonalTranslationValueMax = `calc(${translationValueMax} * ${diagonalFactor})`;
  const negativeDiagonalTranslationValueMax = `calc(${translationValueMax} * ${diagonalFactor} * -1)`;
  switch (position) {
    case 'center':
      return `none`;
    case 'center-right':
      return `translateX(max(${translationValue}, ${translationValueMax})`;
    case 'top-center':
      return `translateY(min(${negativeTranslationValue}, ${negativeTranslationValueMax})`;
    case 'center-left':
      return `translateX(min(${negativeTranslationValue}, ${negativeTranslationValueMax})`;
    case 'bottom-center':
      return `translateY(max(${translationValue}, ${translationValueMax})`;
    case 'top-right':
      return `translateX(max(${diagonalTranslationValue}, ${diagonalTranslationValueMax})) translateY(min(${negativeDiagonalTranslationValue}, ${negativeDiagonalTranslationValueMax}))`;
    case 'top-left':
      return `translateX(min(${negativeDiagonalTranslationValue}, ${negativeDiagonalTranslationValueMax})) translateY(min(${negativeDiagonalTranslationValue}, ${negativeDiagonalTranslationValueMax}))`;
    case 'bottom-left':
      return `translateX(min(${negativeDiagonalTranslationValue}, ${negativeDiagonalTranslationValueMax})) translateY(max(${diagonalTranslationValue}, ${diagonalTranslationValueMax}))`;
    case 'bottom-right':
      return `translateX(max(${diagonalTranslationValue}, ${diagonalTranslationValueMax})) translateY(max(${diagonalTranslationValue}, ${diagonalTranslationValueMax}))`;
  }
};

export const Avatar: FC<AvatarProps> = ({
  alt = '',
  children,
  img,
  size = AVATAR_MINIMUM_SIZE,
  status,
  statusPosition = 'top-left',
  placeholderInitials = '',
  ...props
}) => {
  const theirProps = excludeClassName(props);
  const theme = useTheme().theme.avatar;
  const maxedSize = `max(${size}, ${AVATAR_MINIMUM_SIZE})`;
  const memoizedStatusPosition = useMemo(() => getStatusPosition(statusPosition, size), [statusPosition, size]);

  return (
    <div className="flex items-center" data-testid="sui-avatar-container" {...theirProps}>
      <div className="relative flex items-center justify-center" data-testid="sui-avatar">
        <div className={twMerge(classNames('overflow-hidden', theme.base))}>
          {img ? (
            <img alt={alt} data-testid="sui-avatar-img" src={img} style={{ width: maxedSize, height: maxedSize }} />
          ) : placeholderInitials ? (
            <div
              style={{ width: maxedSize, height: maxedSize }}
              className={classNames('relative overflow-hidden inline-flex justify-center items-center w-full h-full')}
            >
              <span
                className={classNames(theme.text)}
                data-testid="sui-avatar-initials-placeholder"
                style={{ fontSize: `max(calc(${size} / 2.5), 12px)` }}
              >
                {placeholderInitials}
              </span>
            </div>
          ) : (
            <div data-testid="sui-avatar-img" style={{ width: maxedSize, height: maxedSize }}>
              <svg className={theme.svg} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
        {status && (
          <div
            data-testid="sui-status-badge"
            className={twMerge(
              classNames('absolute rounded-full origin-top', theme.statusBadge, theme.statusColor[status])
            )}
            style={{
              width: `max(calc(${size} / 3), calc(${AVATAR_MINIMUM_SIZE}/3))`,
              height: `max(calc(${size} / 3), calc(${AVATAR_MINIMUM_SIZE}/3))`,
              borderWidth: `min(calc(${size} / 30), 2px)`,
              transform: memoizedStatusPosition
            }}
          />
        )}
      </div>
      {children && <div>{children}</div>}
    </div>
  );
};
