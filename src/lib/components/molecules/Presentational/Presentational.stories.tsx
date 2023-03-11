import type { Meta, Story } from '@storybook/react/types-6-0';
import { HiCreditCard } from 'react-icons/hi';
import { Presentational } from '.';

export default {
  title: 'Components/molecules/Presentational',
  component: Presentational
} as Meta;

const Template: Story = () => (
  <Presentational>
    <Presentational.Icon icon={<HiCreditCard fontSize={40} />} />
    <Presentational.Title>Officia pariatur quis qui</Presentational.Title>
    <Presentational.Line>
      Fugiat cillum ex culpa nisi velit sint minim consequat. Laboris do nostrud laborum dolor amet labore ea laboris
      aliquip esse esse nisi. Velit dolor veniam culpa proident do non labore esse magna consectetur fugiat deserunt
      velit magna. Lorem ad cillum incididunt commodo irure.
    </Presentational.Line>
  </Presentational>
);

export const Default = Template.bind({});
Default.args = {};
