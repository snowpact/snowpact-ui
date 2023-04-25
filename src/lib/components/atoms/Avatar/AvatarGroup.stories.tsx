import type { Meta, Story } from '@storybook/react/types-6-0';
import { Avatar } from '.';
import type { AvatarGroupProps } from './AvatarGroup';

export default {
  title: 'Components/atoms/Avatar',
  component: Avatar.Group
} as Meta;

const avatarSize = '50px';

const Template: Story<AvatarGroupProps> = (args) => (
  <Avatar.Group {...args}>
    <Avatar
      img="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
      status="away"
      statusPosition="top-left"
      size={avatarSize}
    />
    <Avatar
      img="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
      status="busy"
      statusPosition="center"
      size={avatarSize}
    />
    <Avatar
      img="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
      status="offline"
      statusPosition="top-center"
      size={avatarSize}
    />
    <Avatar
      img="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
      status="online"
      statusPosition="top-right"
      size={avatarSize}
    />
    <Avatar placeholderInitials="AH" size={avatarSize} />
    <Avatar size={avatarSize} />
    <Avatar.Counter total={99} href="#" size={avatarSize} />
  </Avatar.Group>
);

export const DefaultAvatarGroup = Template.bind({});
DefaultAvatarGroup.storyName = 'Grouped';
DefaultAvatarGroup.args = { stacked: true };
