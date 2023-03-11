import type { Meta, Story } from '@storybook/react/types-6-0';
import type { ProgressProps } from '.';
import { Progress } from '.';

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
  <>
    <div className="text-base font-medium">Extra Small</div>
    <Progress progress={45} size="xs" />
    <div className="mt-3 text-base font-medium">Small</div>
    <Progress progress={45} size="sm" />
    <div className="mt-3 text-base font-medium">Default</div>
    <Progress progress={45} size="md" />
    <div className="mt-3 text-lg font-medium">Large</div>
    <Progress progress={45} size="lg" />
    <div className="mt-3 text-lg font-medium">Extra Large</div>
    <Progress progress={45} size="xl" />
  </>
);

export const Colors = (): JSX.Element => (
  <>
    <div className="text-base font-medium">Primary</div>
    <Progress progress={45} color="primary" />
    <div className="mt-3 text-base font-medium text-blue-700">Info</div>
    <Progress progress={45} color="info" />
    <div className="mt-3 text-base font-medium text-red-700">Failure</div>
    <Progress progress={45} color="failure" />
    <div className="mt-3 text-base font-medium text-green-700">Success</div>
    <Progress progress={45} color="success" />
    <div className="mt-3 text-base font-medium text-yellow-700">Warning</div>
    <Progress progress={45} color="warning" />
    <div className="mt-3 text-base font-medium text-indigo-700">Secondary</div>
    <Progress progress={45} color="secondary" />
    <div className="mt-3 text-base font-medium text-purple-700">Tertiary</div>
    <Progress progress={45} color="tertiary" />
  </>
);

export const WithLabelInside = Template.bind({});
WithLabelInside.storyName = 'With label inside';
WithLabelInside.args = {
  label: 'Flowbite',
  progress: 45,
  size: 'lg'
};

export const WithLabelOutside = Template.bind({});
WithLabelOutside.storyName = 'With label outside';
WithLabelOutside.args = {
  label: 'Flowbite',
  labelPosition: 'outside',
  labelProgress: true,
  progress: 45
};
