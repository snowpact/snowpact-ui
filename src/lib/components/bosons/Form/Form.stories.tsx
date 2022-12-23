import type { Meta, Story } from '@storybook/react/types-6-0';
import type { FormProps } from '.';
import { Form } from '.';

export default {
  title: 'Components/bosons/Form',
  component: Form,
  decorators: [
    (Story): JSX.Element => (
      <div className="h-1/2 w-1/2">
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <div className='flex flex-col'>
      <input id="username" name="username" className='border-2' />
      <input id="password" name="password" type="password" />
      <button type="submit">Submit</button>
    </div>
  </Form>
);

export const Default = Template.bind({});
Default.args = {};
