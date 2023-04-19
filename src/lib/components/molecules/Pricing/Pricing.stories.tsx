import type { Meta } from '@storybook/react/types-6-0';
import { FaSnowflake } from 'react-icons/fa';
import { Pricing } from '.';
import type { PricingCardProps } from './PricingCard';

export default {
  title: 'Components/molecules/Pricing',
  component: Pricing
} as Meta;

export const Default = (): JSX.Element => (
  <Pricing>
    <Pricing.Card {...PRICING_CARD_DATA} title="Basic" />
    <Pricing.Card {...PRICING_CARD_DATA} title="Plus" priceValue="15€" priceFrequency=" / mois" main />
    <Pricing.Card {...PRICING_CARD_DATA} title="Premium" priceValue="30€" priceFrequency=" / mois" />
  </Pricing>
);

const PRICING_CARD_DATA: PricingCardProps = {
  icon: <FaSnowflake size="full" />,
  title: 'Titre',
  priceValue: 'Gratuit',
  details: ['Lorem ipsum dolor sit amet', 'Sed ut perspiciatis unde omnis', 'Ut enim ad minima veniam'],
  link: 'http://www.google.fr',
  buttonTitle: "Let's go"
};
