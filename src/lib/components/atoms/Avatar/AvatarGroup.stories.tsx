import type { Meta, Story } from '@storybook/react/types-6-0';
import { Avatar } from '.';
import type { AvatarGroupProps } from './AvatarGroup';

export default {
  title: 'Components/atoms/Avatar',
  component: Avatar.Group
} as Meta;

const Template: Story<AvatarGroupProps> = (args) => (
  <Avatar.Group {...args}>
    <Avatar
      img="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
      rounded
      bordered
      status="away"
      statusPosition="top-left"
    />
    <Avatar
      img="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
      rounded
      bordered
      status="busy"
      statusPosition="center"
    />
    <Avatar
      img="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
      rounded
      bordered
      status="offline"
      statusPosition="top-center"
    />
    <Avatar
      img="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
      rounded
      bordered
      status="online"
      statusPosition="top-right"
    />
    <Avatar placeholderInitials="AH" rounded bordered />
    <Avatar rounded bordered />
    <Avatar.Counter total={99} href="#" rounded bordered />
  </Avatar.Group>
);

export const DefaultAvatarGroup = Template.bind({});
DefaultAvatarGroup.storyName = 'Grouped';
DefaultAvatarGroup.args = { stacked: true };
