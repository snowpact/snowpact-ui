import classNames from 'classnames';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export interface PricingCardProps {
  icon?: React.ReactNode;
  title: string;
  priceValue: string;
  priceFrequency?: string;
  details: string[];
  main?: boolean;
  children?: React.ReactNode;
}

export const PricingCard = ({
  icon,
  title,
  priceValue,
  priceFrequency,
  details,
  children,
  main = false
}: PricingCardProps) => {
  const theme = useTheme().theme.pricing;
  return (
    <div
      className={twMerge(
        classNames(
          'grid min-h-[495px] w-96 grid-rows-[80px_50px_45px_1fr_50px] p-8 md:px-14 md:pt-14',
          theme.block,
          theme.text,
          main && [theme.variant.main.block, theme.variant.main.text]
        )
      )}
    >
      <div className={'flex w-full justify-self-start'}>{icon}</div>

      <span className={classNames('flex items-end', theme.title)}>{title}</span>
      <div className="flex gap-1">
        <span className={theme.priceValue}>{priceValue}</span>
        <span className={classNames('self-end', theme.priceFrequency)}>{priceFrequency}</span>
      </div>
      <ul className="flex list-disc flex-col gap-1 pt-5">
        {details.map((detail, index) => (
          <li key={index} className={theme.details}>
            {detail}
          </li>
        ))}
      </ul>
      <br />
      {children}
    </div>
  );
};
