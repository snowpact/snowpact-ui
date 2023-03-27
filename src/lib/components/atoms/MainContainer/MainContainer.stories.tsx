import type { Meta, Story } from '@storybook/react/types-6-0';
import { MainContainer } from '.';
import { Button } from '../Button/Button';
import type { MainContainerProps } from './MainContainer';

export default {
  title: 'Components/Atoms/MainContainer',
  component: MainContainer
} as Meta;

const Template: Story<MainContainerProps> = (args) => <MainContainer {...args} />;

export const DefaultMainContainer = Template.bind({});
DefaultMainContainer.args = {
  children: (
    <MainContainer>
      <section className="bg-red-500">
        <p>My Text</p>
      </section>
    </MainContainer>
  )
};

export const CustomBackgroundMainContainer = Template.bind({});
CustomBackgroundMainContainer.args = {
  children: (
    <>
      <div className="absolute inset-0 bg-red-500"></div>
      <MainContainer>
        <p>My Text</p>
      </MainContainer>
    </>
  )
};

export const MultipleSections = () => (
  <MainContainer spaced>
    <section id="1">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </p>
    </section>
    <section id="2">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </p>
      <Button>Test</Button>
      <Button>Test</Button>
    </section>
    <section id="3">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </p>
    </section>
    <section className="relative" id="3">
      <img
        alt=""
        src="https://salient.tailwindui.com/_next/static/media/background-call-to-action.6a5a5672.jpg"
        className="absolute inset-0 h-full object-cover"
        loading="lazy"
        width="2347"
        height="1244"
      />
    </section>
  </MainContainer>
);
