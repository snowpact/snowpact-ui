import classNames from 'classnames';
import type { FC } from 'react';
import React from 'react';
import { HiStar } from 'react-icons/hi';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { useRatingContext } from './RatingContext';

export interface RatingStarProps {
  filled?: boolean;
  starIcon?: React.ReactNode;
}

export const RatingStar: FC<RatingStarProps> = ({ filled = true, starIcon = <HiStar className="h-full w-full" /> }) => {
  const { size = 'sm' } = useRatingContext();
  const theme = useTheme().theme.rating.star;

  return (
    <div
      className={classNames('flex items-center justify-center', theme.sizes[size], theme[filled ? 'filled' : 'empty'])}
      data-testid="sui-rating-star"
    >
      {starIcon}
    </div>
  );
};
