import type { Meta, Story } from '@storybook/react/types-6-0';
import { Stack } from '.';
import type { StackProps } from './Stack';

export default {
  title: 'Components/molecules/Stack',
  component: Stack
} as Meta;

const Template: Story<StackProps> = (args) => <Stack {...args} />;

const STACKS_DATA = [
  {
    stackTitle: 'Category 1',
    items: [
      {
        image: 'https://snowpact.com/static/bbfc78f3a6a4c94f955ebc166ba7a4d6/59649/stack-gatsby.png',
        alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a.',
        title: 'No link'
      },
      {
        image: 'https://snowpact.com/static/bbfc78f3a6a4c94f955ebc166ba7a4d6/59649/stack-gatsby.png',
        alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a.',
        title: 'Has link (gray)',
        link: 'https://snowpact.com/techno/gatsby',
        grayscale: true
      },
      {
        image: 'https://snowpact.com/static/bbfc78f3a6a4c94f955ebc166ba7a4d6/59649/stack-gatsby.png',
        alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a.',
        title: 'Has link',
        link: 'https://snowpact.com/techno/gatsby'
      },
      {
        image: 'https://snowpact.com/static/bbfc78f3a6a4c94f955ebc166ba7a4d6/59649/stack-gatsby.png',
        alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a.',
        title: 'Has link',
        link: 'https://snowpact.com/techno/gatsby'
      }
    ]
  },
  {
    stackTitle: 'Category 2',
    items: [
      {
        image: 'https://snowpact.com/static/bbfc78f3a6a4c94f955ebc166ba7a4d6/59649/stack-gatsby.png',
        alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a.',
        title: 'Has link',
        link: 'https://snowpact.com/techno/gatsby'
      },
      {
        image: 'https://snowpact.com/static/bbfc78f3a6a4c94f955ebc166ba7a4d6/59649/stack-gatsby.png',
        alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a.',
        title: 'No link (gray)',
        grayscale: true
      },
      {
        image: 'https://snowpact.com/static/bbfc78f3a6a4c94f955ebc166ba7a4d6/59649/stack-gatsby.png',
        alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a.',
        title: 'No link'
      },
      {
        image: 'https://snowpact.com/static/bbfc78f3a6a4c94f955ebc166ba7a4d6/59649/stack-gatsby.png',
        alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a.',
        title: 'Has link',
        link: 'https://snowpact.com/techno/gatsby'
      }
    ]
  },
  {
    stackTitle: 'Category 3',
    items: [
      {
        image: 'https://snowpact.com/static/bbfc78f3a6a4c94f955ebc166ba7a4d6/59649/stack-gatsby.png',
        alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a.',
        title: 'Has link',
        link: 'https://snowpact.com/techno/gatsby'
      },
      {
        image: 'https://snowpact.com/static/bbfc78f3a6a4c94f955ebc166ba7a4d6/59649/stack-gatsby.png',
        alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a.',
        title: 'Has link',
        link: 'https://snowpact.com/techno/gatsby'
      },
      {
        image: 'https://snowpact.com/static/bbfc78f3a6a4c94f955ebc166ba7a4d6/59649/stack-gatsby.png',
        alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a.',
        title: 'Has link (gray)',
        link: 'https://snowpact.com/techno/gatsby',
        grayscale: true
      },
      {
        image: 'https://snowpact.com/static/bbfc78f3a6a4c94f955ebc166ba7a4d6/59649/stack-gatsby.png',
        alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a.',
        title: 'No link'
      }
    ]
  }
];

export const DefaultStack = Template.bind({});
DefaultStack.storyName = 'Default';
DefaultStack.args = {
  children: (
    <Stack>
      {STACKS_DATA.map((stack, index) => (
        <Stack.ItemGroup key={index}>
          <Stack.Title>{stack.stackTitle}</Stack.Title>
          {stack.items.map((item, index) => (
            <Stack.Item key={index} {...item} />
          ))}
        </Stack.ItemGroup>
      ))}
    </Stack>
  )
};

export const HorizontalStack = Template.bind({});
HorizontalStack.storyName = 'With Horizontal Item Group';
HorizontalStack.args = {
  children: (
    <Stack>
      {STACKS_DATA.map((stack, index) => (
        <Stack.ItemGroup horizontal key={index}>
          <Stack.Title>{stack.stackTitle}</Stack.Title>
          {stack.items.map((item, index) => (
            <Stack.Item key={index} {...item} />
          ))}
        </Stack.ItemGroup>
      ))}
    </Stack>
  )
};

export const WithLinks = Template.bind({});
WithLinks.storyName = 'With horizontal stack';
WithLinks.args = {
  children: (
    <Stack horizontal>
      {STACKS_DATA.map((stack, index) => (
        <Stack.ItemGroup key={index}>
          <Stack.Title>{stack.stackTitle}</Stack.Title>
          {stack.items.map((item, index) => (
            <Stack.Item
              key={index}
              title={item.title}
              link={item.link}
              image={item.image}
              alt={item.alt}
              grayscale={item.grayscale}
            />
          ))}
        </Stack.ItemGroup>
      ))}
    </Stack>
  )
};
