import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Rating } from '.';
import { RatingAdvanced } from './RatingAdvanced';

describe.concurrent('Components / Rating', () => {
  describe.concurrent('Rendering', () => {
    it('should fill each bar by the specified percentaged when using `RatingAdvanced`', () => {
      render(<AdvancedRating />);

      expect(bars()[0]).toHaveStyle('width: 70%');
      expect(bars()[1]).toHaveStyle('width: 17%');
      expect(bars()[2]).toHaveStyle('width: 8%');
      expect(bars()[3]).toHaveStyle('width: 4%');
      expect(bars()[4]).toHaveStyle('width: 1%');
    });

    it('should visually distinguish unfilled stars', () => {
      render(<AdvancedRating />);

      expect(emptyStars()[4]).not.toHaveAttribute('filling');
    });
  });
});

const AdvancedRating = (): JSX.Element => (
  <div className="flex flex-col gap-4">
    <Rating rating={3.2} />
    <p className="pb-3 text-sm font-medium text-gray-500">1,745 global ratings</p>
    <RatingAdvanced percentFilled={70}>5 star</RatingAdvanced>
    <RatingAdvanced percentFilled={17}>4 star</RatingAdvanced>
    <RatingAdvanced percentFilled={8}>3 star</RatingAdvanced>
    <RatingAdvanced percentFilled={4}>2 star</RatingAdvanced>
    <RatingAdvanced percentFilled={1}>1 star</RatingAdvanced>
  </div>
);

const bars = () => screen.getAllByTestId('sui-rating-fill');

const emptyStars = () => screen.getAllByTestId('sui-rating-star');
