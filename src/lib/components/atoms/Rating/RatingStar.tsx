import classNames from 'classnames';
import type { FC } from 'react';
import { useId } from 'react';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import type { StarSizes } from './Rating';

export interface RatingStarProps {
  filling?: 'full' | 'half' | 'empty';
  hexFilledColor?: string;
  hexEmptyColor?: string;
  size?: keyof StarSizes;
}

export const RatingStar: FC<RatingStarProps> = ({
  filling = 'empty',
  hexFilledColor = '#FBBC05',
  hexEmptyColor = '#C4C4C4',
  size = 'sm'
}) => {
  const theme = useTheme().theme.rating.star;
  const id = useId();

  let leftSide, rightSide;
  if (filling === 'full') {
    leftSide = hexFilledColor;
    rightSide = hexFilledColor;
  } else if (filling === 'empty') {
    leftSide = hexEmptyColor;
    rightSide = hexEmptyColor;
  } else if (filling === 'half') {
    leftSide = hexFilledColor;
    rightSide = hexEmptyColor;
  }

  return (
    <div className={classNames('flex items-center justify-center', theme.sizes[size])} data-testid="sui-rating-star">
      <svg width="" height="" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={id}>
            <stop offset="50%" stopColor={leftSide} />
            <stop offset="50%" stopColor={rightSide} />
          </linearGradient>
        </defs>
        <path
          d="M10 0.148438L12.935 6.14144L19.5 7.10844L14.75 11.7704L15.871 18.3564L10 15.2454L4.129 18.3564L5.25 11.7704L0.5 7.10844L7.064 6.14144L10 0.148438Z"
          fill={`url(#${id})`}
        />
      </svg>
    </div>
  );
};
