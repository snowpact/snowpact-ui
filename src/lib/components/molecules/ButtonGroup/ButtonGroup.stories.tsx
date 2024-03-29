import type { Meta, Story } from '@storybook/react/types-6-0';
import { ButtonGroup } from '.';
import { Button } from '../../atoms/Button/Button';
import type { ButtonGroupProps } from './ButtonGroup';

export default {
  title: 'Components/molecules/ButtonGroup',
  component: ButtonGroup
} as Meta;

const Template: Story<ButtonGroupProps> = (args) => (
  <ButtonGroup {...args}>
    <Button color="primary">Profile</Button>
    <Button color="primary">Settings</Button>
    <Button color="primary">Messages</Button>
  </ButtonGroup>
);

export const DefaultButtonGroup = Template.bind({});
DefaultButtonGroup.storyName = 'ButtonGroup';
DefaultButtonGroup.args = {};
