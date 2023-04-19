export interface PricingProps {
  children: React.ReactNode;
}

export const Pricing = ({ children }: PricingProps) => {
  return <div className="flex flex-wrap justify-center gap-5">{children}</div>;
};
