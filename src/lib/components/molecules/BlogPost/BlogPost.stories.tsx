import type { Meta, Story } from '@storybook/react/types-6-0';
import { BlogPost } from '.';
import type { BlogPostProps } from './BlogPost';
import type { BlogPostItemProps } from './BlogPostItem';

export default {
  title: 'Components/molecules/BlogPost',
  component: BlogPost
} as Meta;

const Template: Story<BlogPostProps> = (args) => <BlogPost {...args} />;

const TAGS: BlogPostItemProps[] = [
  {
    link: '/zs',
    title: 'Générer le certificat de développement Apple pour votre appli react native',
    tags: ['React - Native', 'IOS', 'AppleCertificate'],
    description: 'Comment générér un certificat Apple pour le déploiement de votre application React Native',
    authorImage:
      'https://images.unsplash.com/photo-1679412330231-4a049ffd294b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    authorName: 'Murat',
    publicationDate: new Date('03/21/2023'),
    readingTime: 2,
    image:
      'https://images.unsplash.com/photo-1679055471234-860fc4713098?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80'
  },
  {
    link: '/zs',
    title: 'Générer le certificat de développement Apple pour votre appli react native',
    tags: ['React - Native', 'IOS', 'AppleCertificate'],
    description: 'Comment générér un certificat Apple pour le déploiement de votre application React Native',
    authorImage:
      'https://images.unsplash.com/photo-1679412330231-4a049ffd294b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    authorName: 'Murat',
    publicationDate: new Date('03/21/2023'),
    readingTime: 2,
    image:
      'https://images.unsplash.com/photo-1679055471234-860fc4713098?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80'
  },
  {
    link: '/zs',
    title: 'Générer le certificat de développement Apple pour votre appli react native',
    tags: ['React - Native', 'IOS', 'AppleCertificate'],
    description: 'Comment générér un certificat Apple pour le déploiement de votre application React Native',
    authorImage:
      'https://images.unsplash.com/photo-1679412330231-4a049ffd294b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    authorName: 'Murat',
    publicationDate: new Date('03/21/2023'),
    readingTime: 2,
    image:
      'https://images.unsplash.com/photo-1679055471234-860fc4713098?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80'
  },
  {
    link: '/zs',
    title: 'Générer le certificat de développement Apple pour votre appli react native',
    tags: ['React - Native', 'IOS', 'AppleCertificate'],
    description: 'Comment générér un certificat Apple pour le déploiement de votre application React Native',
    authorImage:
      'https://images.unsplash.com/photo-1679412330231-4a049ffd294b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    authorName: 'Murat',
    publicationDate: new Date('03/21/2023'),
    readingTime: 2,
    image:
      'https://images.unsplash.com/photo-1679055471234-860fc4713098?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80'
  },
  {
    link: '/zs',
    title: 'Générer le certificat de développement Apple pour votre appli react native',
    tags: ['React - Native', 'IOS', 'AppleCertificate'],
    description: 'Comment générér un certificat Apple pour le déploiement de votre application React Native',
    authorImage:
      'https://images.unsplash.com/photo-1679412330231-4a049ffd294b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    authorName: 'Murat',
    publicationDate: new Date('03/21/2023'),
    readingTime: 2,
    image:
      'https://images.unsplash.com/photo-1679055471234-860fc4713098?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80'
  }
];

export const DefaultBlogPost = Template.bind({});
DefaultBlogPost.storyName = 'Default';
DefaultBlogPost.args = {
  children: (
    <BlogPost>
      {TAGS.map((item, index) => (
        <BlogPost.Item
          key={index}
          {...item}
          variant={index === 0 || index === TAGS.length - 1 ? 'horizontal' : 'vertical'}
        />
      ))}
    </BlogPost>
  )
};

export const VerticalBlogPost = Template.bind({});
VerticalBlogPost.storyName = 'Vertical';
VerticalBlogPost.args = {
  children: (
    <BlogPost>
      {TAGS.map((item, index) => (
        <BlogPost.Item key={index} {...item} />
      ))}
    </BlogPost>
  )
};

export const HorizontalBlogPost = Template.bind({});
HorizontalBlogPost.storyName = 'Horizontal';
HorizontalBlogPost.args = {
  children: (
    <BlogPost>
      {TAGS.map((item, index) => (
        <BlogPost.Item key={index} {...item} variant="horizontal" />
      ))}
    </BlogPost>
  )
};
