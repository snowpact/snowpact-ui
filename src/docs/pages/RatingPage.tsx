import type { FC } from 'react';
import { Rating } from '../../lib';
import { RatingAdvanced } from '../../lib/components/atoms/Rating/RatingAdvanced';
import type { CodeExample } from './DemoPage';
import { DemoPage } from './DemoPage';

const RatingPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default rating',
      code: <Rating rating={3.2} />
    },
    {
      title: 'Star sizing',
      code: (
        <>
          <Rating rating={3.2} />

          <Rating rating={3.2} size="md" />

          <Rating rating={3.2} size="lg" />
        </>
      )
    },
    {
      title: 'Advanced rating',
      code: (
        <>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
          <RatingAdvanced percentFilled={70}>5 star</RatingAdvanced>
          <RatingAdvanced percentFilled={17}>4 star</RatingAdvanced>
          <RatingAdvanced percentFilled={8}>3 star</RatingAdvanced>
          <RatingAdvanced percentFilled={4}>2 star</RatingAdvanced>
          <RatingAdvanced percentFilled={1}>1 star</RatingAdvanced>
        </>
      )
    }
  ];

  return <DemoPage examples={examples} />;
};

export default RatingPage;
