import classNames from 'classnames';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { LinkComponent } from '../../bosons/LinkComponent/LinkComponent';

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
      className={twMerge(
        classNames(
          'grid h-[495px] w-96 grid-rows-[80px_50px_45px_1fr_50px] p-8 md:px-14 md:pt-14',
          theme.block,
          theme.text,
          main && [theme.variant.main.block, theme.variant.main.text]
        )
      )}
    >
      <div className={classNames('flex justify-self-start', theme.icon)}>{icon}</div>

      <span className={classNames('flex items-end', theme.title)}>{title}</span>
      <div className="flex gap-1">
        <span className={classNames(theme.priceValue)}>{priceValue}</span>
        <span className={classNames('self-end', theme.priceFrequency)}>{priceFrequency}</span>
      </div>
      <div className="pt-5">
        <ul className="flex list-disc flex-col gap-1">
          {details.map((detail, index) => (
            <li key={index} className={classNames(theme.details)}>
              {detail}
            </li>
          ))}
        </ul>
      </div>
      <LinkComponent href={link}>
        <div
          className={twMerge(
            classNames(
              'flex h-full w-full cursor-pointer items-center justify-center',
              theme.button,
              main && theme.variant.main.button
            )
          )}
        >
          {buttonTitle}
        </div>
      </LinkComponent>
    </div>
  );
};
