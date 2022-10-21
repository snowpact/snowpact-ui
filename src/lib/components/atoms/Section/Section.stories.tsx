import type { Meta, Story } from '@storybook/react/types-6-0';
import type { SectionProps } from '.';
import { Section } from '.';
import { Button } from '../Button';

export default {
  title: 'Components/Atoms/Section',
  component: Section,
} as Meta;

const Template: Story<SectionProps> = (args) => <Section {...args} />;

export const DefaultSection = Template.bind({});
DefaultSection.args = {
    children: (
        <>
            <Section.Container>
                <div className='bg-red-500'>
                    <p>My Text</p>
                </div>  
            </Section.Container>
        </>
  ),
};


export const CustomBackgroundSection = Template.bind({});
CustomBackgroundSection.args = {
    children: (
        <>  
            <div className='absolute bg-red-500 top-0 bottom-0 left-0 right-0'>
            </div>
            <Section.Container>
                <p>My Text</p>
            </Section.Container>
        </>
  ),
};

export const MultipleSections = () => (
    <div>
        <Section id="1">
            <Section.Container>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </Section.Container>
        </Section>
        <Section id="2">
            <Section.Container spaced>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <Button>Test</Button>
                <Button>Test</Button>
            </Section.Container>
        </Section>
        <Section id="3" innerClassName='bg-red-500'>
            <Section.Container>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </Section.Container>
        </Section>
        <Section id="3" innerClassName='bg-red-500'>
            <img alt="" src="https://salient.tailwindui.com/_next/static/media/background-call-to-action.6a5a5672.jpg"
                className="absolute top-0 left-0 bottom-0 right-0 h-full object-cover" loading="lazy"
                 width="2347" height="1244" />
            <Section.Container>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </Section.Container>
        </Section>
    </div>
)