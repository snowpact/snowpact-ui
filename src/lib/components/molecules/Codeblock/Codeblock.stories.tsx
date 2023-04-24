import type { Meta, Story } from '@storybook/react/types-6-0';
import { Codeblock } from '.';
import type { CodeblockProps } from './Codeblock';

export default {
  title: 'Components/molecules/Codeblock',
  component: Codeblock,
  decorators: [
    (Story): JSX.Element => (
      <div className="h-1/2 w-1/2">
        <Story />
      </div>
    )
  ]
} as Meta;

const Template: Story<CodeblockProps> = (args) => <Codeblock {...args} />;

const CODE = `let message: string = 'Hello, World!';
console.log(message);`;

export const Default = Template.bind({});
Default.args = { code: CODE, language: 'typescript' };
