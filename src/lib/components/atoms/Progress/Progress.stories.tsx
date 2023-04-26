import type { Meta, Story } from '@storybook/react/types-6-0';
import { Progress } from '.';
import type { ProgressProps } from './Progress';

export default {
  title: 'Components/atoms/Progress',
  component: Progress,
  decorators: [
    (Story): JSX.Element => (
      <div className="flex w-1/2 flex-col">
        <Story />
      </div>
    )
  ]
} as Meta;

const Template: Story<ProgressProps> = (args) => <Progress {...args} />;

export const Default = Template.bind({});
Default.args = {
  progress: 45
};

export const Sizes = (): JSX.Element => (
  <div className="flex flex-col gap-2">
    <Progress progress={45} size="xs" label="Extra Small" labelPosition="outside" />
    <Progress progress={45} size="sm" label="Small" labelPosition="outside" />
    <Progress progress={45} size="md" label="Default" labelPosition="outside" />
    <Progress progress={45} size="lg" label="Large" labelPosition="outside" />
    <Progress progress={45} size="xl" label="Extra Large" labelPosition="outside" />
  </div>
);

export const Colors = (): JSX.Element => (
  <div className="flex flex-col gap-2">
    <Progress progress={45} color="primary" label="Primary" labelPosition="outside" />
    <Progress progress={45} color="info" label="Info" labelPosition="outside" />
    <Progress progress={45} color="failure" label="Failure" labelPosition="outside" />
    <Progress progress={45} color="success" label="Success" labelPosition="outside" />
    <Progress progress={45} color="warning" label="Warning" labelPosition="outside" />
    <Progress progress={45} color="secondary" label="Secondary" labelPosition="outside" />
    <Progress progress={45} color="tertiary" label="Tertiary" labelPosition="outside" />
  </div>
);

export const WithLabelInside = Template.bind({});
WithLabelInside.storyName = 'With label inside';
WithLabelInside.args = {
  label: 'Flowbite',
  labelPosition: 'inside',
  labelProgress: false,
  progress: 45,
  size: 'xl'
};

export const WithLabelOutside = Template.bind({});
WithLabelOutside.storyName = 'With label outside';
WithLabelOutside.args = {
  label: 'Flowbite',
  labelPosition: 'outside',
  labelProgress: true,
  progress: 45
};
