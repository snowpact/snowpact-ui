import type { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from '../atoms/Button';
import { ButtonGroup } from '.';
import type { ButtonGroupProps } from '.';

export default {
  title: 'Components/Molecules/ButtonGroup',
  component: ButtonGroup,
} as Meta;

const Template: Story<ButtonGroupProps> = (args) => (
  <ButtonGroup {...args}>
    <Button color="gray">Profile</Button>
    <Button color="gray">Settings</Button>
    <Button color="gray">Messages</Button>
  </ButtonGroup>
);

export const DefaultButtonGroup = Template.bind({});
DefaultButtonGroup.storyName = 'ButtonGroup';
DefaultButtonGroup.args = {};
