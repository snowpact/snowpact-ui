import type { Meta, Story } from '@storybook/react/types-6-0';
import { PostAuthor } from '.';
import type { PostAuthorProps } from './PostAuthor';

export default {
  title: 'Components/molecules/PostAuthor',
  component: PostAuthor
} as Meta;

const Template: Story<PostAuthorProps> = (args) => <PostAuthor {...args} />;

const POST_AUTHOR_DATA = {
  authorImage:
    'https://images.unsplash.com/photo-1679267441399-d73d2640cf68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
  authorName: 'Murat',
  authorLink: 'http://www.google.fr',
  publicationDate: new Date('03/21/2023'),
  readingTime: 2
};

export const DefaultPostAuthor = Template.bind({});
DefaultPostAuthor.storyName = 'Default';
DefaultPostAuthor.args = {
  children: (
    <PostAuthor
      authorImage={POST_AUTHOR_DATA.authorImage}
      authorName={POST_AUTHOR_DATA.authorName}
      authorLink={POST_AUTHOR_DATA.authorLink}
      publicationDate={POST_AUTHOR_DATA.publicationDate}
      readingTime={POST_AUTHOR_DATA.readingTime}
    />
  )
};
