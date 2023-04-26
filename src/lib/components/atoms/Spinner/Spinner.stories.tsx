import type { Meta, Story } from '@storybook/react/types-6-0';
import { Spinner } from '.';

export default {
  title: 'Components/atoms/Spinner',
  component: Spinner
} as Meta;

const Template: Story = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'info',
  size: 'md',
  title: 'Default spinner example'
};

export const Alignment = (): JSX.Element => (
  <div className="flex w-1/3 flex-col gap-3 p-6">
    <div className="text-left">
      <Spinner />
    </div>
    <div className="text-center">
      <Spinner />
    </div>
    <div className="text-right">
      <Spinner />
    </div>
  </div>
);

export const Colors = (): JSX.Element => (
  <div className="flex flex-row gap-3">
    <Spinner color="info" />
    <Spinner color="success" />
    <Spinner color="failure" />
    <Spinner color="warning" />
    <Spinner color="primary" />
    <Spinner color="secondary" />
    <Spinner color="tertiary" />
  </div>
);

export const Sizes = (): JSX.Element => (
  <div className="flex flex-row gap-3">
    <Spinner size="xs" />
    <Spinner size="sm" />
    <Spinner size="md" />
    <Spinner size="lg" />
    <Spinner size="xl" />
  </div>
);
