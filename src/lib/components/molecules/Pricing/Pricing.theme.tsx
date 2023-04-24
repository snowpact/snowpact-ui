export type PricingTheme = {
  block: string;
  text: string;
  title: string;
  priceValue: string;
  priceFrequency: string;
  details: string;
  variant: {
    main: {
      block: string;
      text: string;
    };
  };
};

export const PRICING_THEME: PricingTheme = {
  block: 'rounded-lg shadow-xl bg-white',
  text: 'text-black',
  title: 'text-2xl font-semibold font-bold',
  priceValue: 'text-5xl font-semibold font-medium',
  priceFrequency: 'text-2xl font-semibold',
  details: 'font-thin',
  variant: {
    main: {
      block: 'bg-primary-500',
      text: 'text-white'
    }
  }
};
