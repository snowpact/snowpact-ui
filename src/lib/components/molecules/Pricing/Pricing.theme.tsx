export type PricingTheme = {
  block: string;
  text: string;
  button: string;
  icon: string;
  title: string;
  priceValue: string;
  priceFrequency: string;
  details: string;
  variant: {
    main: {
      block: string;
      text: string;
      button: string;
    };
  };
};

export const PRICING_THEME: PricingTheme = {
  block: 'rounded-lg shadow-xl bg-white',
  text: 'text-black',
  button: 'text-xl font-semibold rounded bg-primary text-white',
  icon: 'opacity-20',
  title: 'text-2xl font-semibold font-bold',
  priceValue: 'text-5xl font-semibold font-medium',
  priceFrequency: 'text-2xl font-semibold',
  details: 'font-thin',
  variant: {
    main: {
      block: 'bg-primary',
      text: 'text-white',
      button: 'bg-white text-primary'
    }
  }
};
