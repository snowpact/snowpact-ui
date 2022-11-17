import type { Meta, Story } from '@storybook/react/types-6-0';
import { HiCreditCard } from 'react-icons/hi';
import { PresentationalBlock } from '.';

export default {
  title: 'Components/molecules/PresentationalBlock',
  component: PresentationalBlock,
} as Meta;

const Template: Story = () => (
  <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
    <PresentationalBlock >
      <PresentationalBlock.Icon icon={<HiCreditCard />} />
      <PresentationalBlock.Title>Test</PresentationalBlock.Title> 
      <PresentationalBlock.Line>Test</PresentationalBlock.Line>
    </PresentationalBlock>
  </div>
);

export const Default = Template.bind({});
Default.args = {};

