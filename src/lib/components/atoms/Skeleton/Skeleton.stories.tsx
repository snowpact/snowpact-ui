// Primary obligatoire pour une story?

import type { Meta, Story } from '@storybook/react';

import type { SkeletonProps } from './Skeleton';
import { Skeleton } from './Skeleton';

export default {
  title: 'Components/atoms/Skeleton',
  component: Skeleton,
  decorators: [
    (Story): JSX.Element => (
      <div className="flex w-1/2 flex-col">
        <Story />
      </div>
    )
  ]
} as Meta;

const Template: Story<SkeletonProps> = (args) => <Skeleton {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: '100px',
  height: '100px'
};

export const Examples = () => (
  <div>
    <Skeleton> Ajoute un effet derrière le contenu </Skeleton>
  </div>
);
