import type { Meta, Story } from '@storybook/react/types-6-0';
import { Tag } from '.';
import type { TagProps } from './Tag';
import type { TagOptions } from './TagItem';

export default {
  title: 'Components/molecules/Tag',
  component: Tag
} as Meta;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

const TAGS_DATA_TAGS: TagOptions[] = [
  {
    label: 'react',
    link: 'http://www.google.fr//search?q=react'
  },
  {
    label: 'docker',
    link: 'http://www.google.fr//search?q=docker'
  },
  {
    label: 'node',
    link: 'http://www.google.fr//search?q=node'
  },
  {
    label: 'javascript',
    link: 'http://www.google.fr//search?q=javascript'
  },
  {
    label: 'kebab',
    link: 'http://www.google.fr//search?q=kebab'
  }
];

const TAGS_DATA_STRINGS: string[] = ['react', 'docker', 'node', 'javascript', 'kebab'];

export const WithLinks = Template.bind({});
WithLinks.storyName = 'With links';
WithLinks.args = {
  children: (
    <Tag>
      {TAGS_DATA_TAGS.map((tag, index) => (
        <Tag.Item key={index} tagLink={tag.link}>
          {tag.label}
        </Tag.Item>
      ))}
    </Tag>
  )
};

export const WithoutLinks = Template.bind({});
WithLinks.storyName = 'Without links';
WithLinks.args = {
  children: (
    <Tag>
      {TAGS_DATA_STRINGS.map((tag, index) => (
        <Tag.Item key={index}>{tag}</Tag.Item>
      ))}
    </Tag>
  )
};
