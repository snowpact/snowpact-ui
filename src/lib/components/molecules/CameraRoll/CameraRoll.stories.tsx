import { ComponentMeta, Story } from '@storybook/react';

import { CameraRoll } from './index';

export default {
  title: 'Components/molecules/CameraRoll',
  component: CameraRoll
} as ComponentMeta<typeof CameraRoll>;

const ITEMS = [
  {
    src:
      'https://images.unsplash.com/photo-1664784805210-9fa665e2b7e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
  },
  {
    src:
      'https://images.unsplash.com/photo-1664829698872-d25e65dc302d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80'
  },
  {
    src:
      'https://images.unsplash.com/photo-1664829698872-d25e65dc302d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80'
  },
  {
    src:
      'https://images.unsplash.com/photo-1664829698872-d25e65dc302d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80'
  },
  {
    src:
      'https://images.unsplash.com/photo-1664829698872-d25e65dc302d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80'
  },
  {
    src:
      'https://images.unsplash.com/photo-1664829698872-d25e65dc302d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80'
  }
];

const Template: Story = () => (
    <CameraRoll >
      <CameraRoll.Image src="https://images.unsplash.com/photo-1664784805210-9fa665e2b7e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="Une image" />
    </CameraRoll>
);
export const Base = Template.bind({});

Base.args = { images: ITEMS };
