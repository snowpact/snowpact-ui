import type { Meta, Story } from '@storybook/react/types-6-0';
import { HiCreditCard } from 'react-icons/hi';
import { PresentationalBlock } from '.';

export default {
  title: 'Components/molecules/PresentationalBlock',
  component: PresentationalBlock,
} as Meta;

const Template: Story = () => (
    <PresentationalBlock >
      <PresentationalBlock.Icon icon={<HiCreditCard />} />
      <PresentationalBlock.Title>Test</PresentationalBlock.Title> 
      <PresentationalBlock.Line>Test</PresentationalBlock.Line>
    </PresentationalBlock>
);

export const Default = Template.bind({});
Default.args = {};

