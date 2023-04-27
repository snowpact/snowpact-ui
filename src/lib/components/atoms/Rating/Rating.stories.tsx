import type { Meta, Story } from '@storybook/react/types-6-0';
import { RatingAdvanced } from '.';
import type { RatingStarsProps } from './Rating';
import { Rating } from './Rating';

export default {
  title: 'Components/atoms/Rating',
  component: Rating
} as Meta;

const Template: Story<RatingStarsProps> = (args) => <Rating {...args} />;

export const Default = Template.bind({});
Default.args = {
  ratingValue: 4.2,
  size: 'sm'
};

export const Advanced = (): JSX.Element => (
  <div className="flex flex-col gap-4">
    <p className="ml-2 text-lg font-medium text-gray-500">Rating</p>
    <div className="mb-10 flex">
      <Rating size="sm" ratingValue={3.3} maxRating={5} />
      <p className="ml-2 text-sm font-medium text-gray-500">3.3 out of 5</p>
    </div>
    <p className="ml-2 text-lg font-medium text-gray-500">RatingAvanced</p>
    <div>
      <p className="pb-3 text-sm font-medium text-gray-500">1,745 global ratings</p>
      <RatingAdvanced percentFilled={70}>5 star</RatingAdvanced>
      <RatingAdvanced percentFilled={17}>4 star</RatingAdvanced>
      <RatingAdvanced percentFilled={8}>3 star</RatingAdvanced>
      <RatingAdvanced percentFilled={4}>2 star</RatingAdvanced>
      <RatingAdvanced percentFilled={1}>1 star</RatingAdvanced>
    </div>
  </div>
);
