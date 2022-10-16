import type { Meta, Story } from '@storybook/react/types-6-0';
import { DarkThemeToggle } from '.';
import { HelloInternet } from '../bosons/HelloInternet';

export default {
  title: 'Components/DarkThemeToggle',
  component: DarkThemeToggle,
} as Meta;

const Template: Story = (args) => (
  <HelloInternet>
    <DarkThemeToggle {...args} />
  </HelloInternet>
);

export const DefaultDarkThemeToggle = Template.bind({});
DefaultDarkThemeToggle.storyName = 'Default';
DefaultDarkThemeToggle.args = {};
