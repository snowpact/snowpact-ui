export type PricingTheme = {
  blockStyle: {
    base: string;
    variantOne: string;
    variantTwo: string;
  };
  buttonStyle: {
    base: string;
    variantOne: string;
    variantTwo: string;
  };
  textStyle: {
    base: string;
    variantOne: string;
    variantTwo: string;
  };
  icon: string;
  title: string;
  priceValue: string;
  priceFrequency: string;
  details: string;
  button: string;
};

export const PRICING_THEME: PricingTheme = {
  blockStyle: {
    base: 'rounded-lg shadow-xl',
    variantOne: 'bg-white',
    variantTwo: 'bg-primary'
  },
  buttonStyle: {
    base: 'rounded',
    variantOne: 'bg-primary text-white',
    variantTwo: 'bg-white text-primary'
  },
  textStyle: {
    base: '',
    variantOne: 'text-black',
    variantTwo: 'text-white'
  },
  icon: 'opacity-20',
  title: 'text-2xl font-semibold font-bold',
  priceValue: 'text-5xl font-semibold font-medium',
  priceFrequency: 'text-2xl font-semibold',
  details: 'font-thin',
  button: 'text-xl font-semibold'
};
