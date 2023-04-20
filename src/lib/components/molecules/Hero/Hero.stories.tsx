import type { Meta } from '@storybook/react/types-6-0';

import { Hero } from '.';
import { Button } from '../../atoms';

export default {
  title: 'Components/Molecules/Hero',
  component: Hero
} as Meta;

const TEST_IMAGE_URL = 'https://picsum.photos/1920/1080';

export const Default = (): JSX.Element => (
  <Hero
    backgroundImage={TEST_IMAGE_URL}
    position="center-left"
    backgroundPosition="right center"
    foregroundMaxWidth="45%"
  >
    <Hero.Foreground
      title="Votre équipe de développement agile nodejs et react"
      subtitle="Chez Snowpact, nous vous accompagnons sur la conception, le développement et la mise en production de votre projet web et mobile."
    />
    <Hero.CallToActions>
      <Button type="button">Contactez-nous</Button>
      <Button type="button">Action 2</Button>
    </Hero.CallToActions>
  </Hero>
);
