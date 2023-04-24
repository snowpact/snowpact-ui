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
    <Pricing.Card {...PRICING_CARD_DATA} title="Basic">
      <button className="rounded bg-primary-500 text-xl font-semibold text-white">Let's go</button>
    </Pricing.Card>
    <Pricing.Card {...PRICING_CARD_DATA} title="Plus" priceValue="15€" priceFrequency=" / mois" main>
      <button className="rounded bg-white text-xl font-semibold text-primary-500">Let's go</button>
    </Pricing.Card>
    <Pricing.Card {...PRICING_CARD_DATA} title="Premium" priceValue="30€" priceFrequency=" / mois">
      <button className="rounded bg-primary-500 text-xl font-semibold text-white">Let's go</button>
    </Pricing.Card>
  </Pricing>
);

const PRICING_CARD_DATA: PricingCardProps = {
  icon: <FaSnowflake size="full" />,
  title: 'Titre',
  priceValue: 'Gratuit',
  details: ['Lorem ipsum dolor sit amet', 'Sed ut perspiciatis unde omnis', 'Ut enim ad minima veniam']
};
