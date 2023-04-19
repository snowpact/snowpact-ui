import classNames from 'classnames';
import React from 'react';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export interface PricingCardProps {
  icon?: React.ReactNode;
  title: string;
  priceValue: string;
  priceFrequency?: string;
  details: string[];
  link: string;
  buttonTitle: string;
  main?: boolean;
}

export const PricingCard = ({
  icon,
  title,
  priceValue,
  priceFrequency,
  details,
  link,
  buttonTitle,
  main = false
}: PricingCardProps) => {
  const theme = useTheme().theme.pricing;
  return (
    <div
      className={classNames(
        'grid h-[495px] w-96 grid-rows-[80px_50px_45px_1fr_50px] p-8 md:px-14 md:pt-14',
        theme.blockStyle.base,
        main ? theme.blockStyle.variantTwo : theme.blockStyle.variantOne,
        theme.textStyle.base,
        main ? theme.textStyle.variantTwo : theme.textStyle.variantOne
      )}
    >
      <div className={classNames('flex justify-self-start', theme.icon)}>{icon}</div>

      <span className={classNames('flex items-end', theme.title)}>{title}</span>
      <div className="flex gap-1">
        <span className={classNames(theme.priceValue)}>{priceValue}</span>
        <span className={classNames('self-end', theme.priceFrequency)}>{priceFrequency}</span>
      </div>
      <div className="pt-5">
        <ul className="flex flex-col gap-1">
          {details.map((detail, index) => (
            <li key={index} className={classNames(theme.details)}>
              • {detail}
            </li>
          ))}
        </ul>
      </div>
      <a href={link}>
        <div
          className={classNames(
            'flex h-full w-full cursor-pointer items-center justify-center',
            theme.buttonStyle.base,
            theme.button,
            main ? theme.buttonStyle.variantTwo : theme.buttonStyle.variantOne
          )}
        >
          {buttonTitle}
        </div>
      </a>
    </div>
  );
};
