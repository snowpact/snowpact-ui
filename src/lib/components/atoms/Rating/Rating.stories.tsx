import type { Meta, Story } from '@storybook/react/types-6-0';
import type { RatingStarsProps } from './Rating';
import { Rating } from './Rating';
import { RatingAdvanced } from './RatingAdvanced';
import { RatingStar } from './RatingStar';

export default {
  title: 'Components/atoms/Rating',
  component: Rating
} as Meta;

const Template: Story<RatingStarsProps> = (args) => <Rating {...args} />;

export const Default = Template.bind({});
Default.args = {
  rating: 4.2,
  size: 'sm'
};

export const Advanced = (): JSX.Element => (
  <div className="flex flex-col gap-10 divide-y">
    <div>
      <p className="text-lg font-medium text-gray-500 underline">Rating Star</p>
      <RatingStar size="lg" />
    </div>
    <div>
      <p className="text-lg font-medium text-gray-500 underline">Rating</p>
      <div className="mb-10 flex">
        <Rating size="sm" rating={3.3} max={5} />
        <p className="text-sm font-medium text-gray-500">3.3 out of 5</p>
      </div>
    </div>
    <div>
      <p className="text-lg font-medium text-gray-500 underline">RatingAvanced</p>
      <div>
        <p className="pb-3 text-sm font-medium text-gray-500">1,745 global ratings</p>
        <RatingAdvanced percentFilled={70}>5 star</RatingAdvanced>
        <RatingAdvanced percentFilled={17}>4 star</RatingAdvanced>
        <RatingAdvanced percentFilled={8}>3 star</RatingAdvanced>
        <RatingAdvanced percentFilled={4}>2 star</RatingAdvanced>
        <RatingAdvanced percentFilled={1}>1 star</RatingAdvanced>
      </div>
    </div>
  </div>
);
