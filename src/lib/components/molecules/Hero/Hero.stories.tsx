import type { Meta, Story } from '@storybook/react/types-6-0';

import type { HeroProps } from './Hero';
import { Hero } from './Hero';

export default {
  title: 'Components/Molecules/Hero',
  component: Hero
} as Meta;

const Template: Story<HeroProps> = (args) => <Hero {...args} />;

const TEST_IMAGE_URL = 'https://www.sortiraparis.com/images/58/83517/577986-visuel-paris-velo-quai-2.jpg';

export const Example = Template.bind({});
Example.args = {
  title: 'Size Contain',
  subtitle:
    'A description of about 150 characters, give or take. That means we usually only have room for one or two sentences. Here is what that looks like.',
  height: '500px',
  background: {
    image: TEST_IMAGE_URL,
    size: 'cover',
    position: 'center'
  },
  position: 'center-left',
  cta: <button>Call to action</button>
};

export const DifferentBackground = (): JSX.Element => (
  <>
    <Hero
      title="Size Contain"
      subtitle="And different background color"
      background={{
        image: TEST_IMAGE_URL,
        size: 'contain',
        color: 'cyan'
      }}
    />
    <hr />
    <Hero
      title="Size Auto"
      subtitle="Different position"
      background={{
        color: 'red',
        position: 'right 0 bottom 0'
      }}
    />
    <hr />
    <Hero
      title="Size Cover"
      subtitle="Different position"
      background={{
        image: TEST_IMAGE_URL,
        size: 'cover'
      }}
    />
    <hr />
    <Hero
      title="Repeat-x"
      subtitle="No fallback color"
      background={{
        image: TEST_IMAGE_URL,
        repeat: 'repeat-x'
      }}
    />
    <hr />
    <Hero
      title="No image"
      subtitle="Only fallback color"
      background={{
        color: 'green',
        repeat: 'repeat-x'
      }}
    />
  </>
);

export const WithDifferentHeight = (): JSX.Element => (
  <>
    <Hero
      title="Full"
      subtitle="This is a subtitle"
      background={{
        image: TEST_IMAGE_URL,
        color: 'blue',
        size: 'cover'
      }}
      height="100vh"
    />
    <hr />
    <Hero
      title="Narrow"
      subtitle="This is a subtitle"
      background={{
        image: TEST_IMAGE_URL,
        color: 'blue',
        size: 'cover'
      }}
      height="100%"
    />
    <hr />
    <Hero
      title="Default"
      subtitle="This is a subtitle"
      background={{
        image: TEST_IMAGE_URL,
        color: 'blue',
        size: 'cover'
      }}
    />
  </>
);
