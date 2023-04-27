import classNames from 'classnames';
import type { FC } from 'react';
import type { HISizes } from '../../bosons/HelloInternet/HelloInternetTheme';
import { RatingContext } from './RatingContext';
import { RatingStar } from './RatingStar';

export interface StarSizes extends Pick<HISizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string;
}

export interface RatingStarsProps {
  size?: keyof StarSizes;
  maxRating?: number;
  ratingValue: number;
}

interface RatingStarsCount {
  full: number;
  half: number;
  empty: number;
}

const getRatingStarsCount = (rating: number, maxRating: number): RatingStarsCount => {
  let fullStarsNumber = Math.floor(rating);
  const decimals = rating - fullStarsNumber;
  let halfStarsNumber = 0;
  let emptyStarsNumber = 0;

  if (decimals > 0.75) {
    fullStarsNumber++;
  } else if (decimals >= 0.25 && decimals <= 0.75) {
    halfStarsNumber = 1;
  }

  emptyStarsNumber = maxRating - (fullStarsNumber + halfStarsNumber);
  return { full: fullStarsNumber, half: halfStarsNumber, empty: emptyStarsNumber };
};

export const Rating: FC<RatingStarsProps> = ({ size = 'sm', maxRating = 5, ratingValue }) => {
  const ratingStarsCount = getRatingStarsCount(ratingValue, maxRating);
  const ratingStars = [
    ...Array.from({ length: ratingStarsCount.full }, () => <RatingStar filling="full" />),
    ...Array.from({ length: ratingStarsCount.half }, () => <RatingStar filling="half" />),
    ...Array.from({ length: ratingStarsCount.empty }, () => <RatingStar filling="empty" />)
  ];

  return (
    <RatingContext.Provider value={{ size }}>
      <div className={classNames('flex items-center text-center')}>{ratingStars}</div>
    </RatingContext.Provider>
  );
};
