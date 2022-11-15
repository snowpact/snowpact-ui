import type { Meta, Story } from '@storybook/react/types-6-0';
import type { PresentationalBlockComponentProps } from '.';
import { PresentationalBlock } from '.';

export default {
  title: 'Components/molecules/PresentationalBlock',
  component: PresentationalBlock,
} as Meta;

const Template: Story<PresentationalBlockComponentProps> = (args) => (
  <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
    <PresentationalBlock {...args}>
      <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
    </PresentationalBlock>
  </div>
);

export const Default = Template.bind({});
Default.args = {};
