import classNames from 'classnames';
import type { FC } from 'react';
import type { HISizes } from '../../bosons/HelloInternet/HelloInternetTheme';
import { RatingStar } from './RatingStar';

export interface StarSizes extends Pick<HISizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string;
}

export interface RatingStarsProps {
  size?: keyof StarSizes;
  max?: number;
  rating: number;
}

const getFullStars = (integers: number, decimals: number): number => {
  if (decimals > 0.75) {
    return integers + 1;
  } else {
    return integers;
  }
};

const hasHalfStars = (decimals: number): boolean => {
  if (decimals >= 0.25 && decimals <= 0.75) {
    return true;
  } else {
    return false;
  }
};

const getEmptyStars = (max: number, notEmpty: number): number => {
  return max - notEmpty;
};

export const Rating: FC<RatingStarsProps> = ({ size = 'sm', max = 5, rating }) => {
  const integers = Math.floor(rating);
  const decimals = rating - integers;
  const halfStarsCount = hasHalfStars(decimals) ? 1 : 0;
  const ratingStars = [
    ...Array.from({ length: getFullStars(integers, decimals) }, (index) => (
      <RatingStar key={`full-${index}`} filling="full" size={size} />
    )),
    ...Array.from({ length: halfStarsCount }, (index) => (
      <RatingStar key={`half-${index}`} filling="half" size={size} />
    )),
    ...Array.from({ length: getEmptyStars(max, getFullStars(integers, decimals) + halfStarsCount) }, (index) => (
      <RatingStar key={`empty-${index}`} filling="empty" size={size} />
    ))
  ];

  return <div className={classNames('flex items-center text-center')}>{ratingStars}</div>;
};
