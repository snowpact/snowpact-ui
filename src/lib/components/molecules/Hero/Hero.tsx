import classNames from 'classnames';
import React from 'react';

import { DefaultForeground } from './DefaultForeground';
import { createBackgroundStyle } from './utils';

export interface HeroBackground {
  image?: string;
  color?: string;
  position?: 'top' | 'center' | 'bottom' | 'left' | 'right' | string;
  size?: 'auto' | 'cover' | 'contain' | string;
  repeat?: 'no-repeat' | 'repeat' | 'repeat-x' | 'repeat-y' | 'round' | 'space';
}

export type ForeGroundPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'center-left'
  | 'center-center'
  | 'center-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface HeroProps {
  background?: HeroBackground;
  position?: ForeGroundPosition;
  title: string;
  subtitle?: string;
  cta?: React.ReactNode;
  height?: string;
  customForeground?: (defaultTitle: JSX.Element) => JSX.Element;
}

export const Hero: React.FC<HeroProps> = ({
  background,
  position,
  title,
  subtitle,
  cta,
  height = '600px',
  customForeground
}) => {
  const defaultElement = <DefaultForeground title={title} subtitle={subtitle} cta={cta} />;

  return (
    <div className="relative">
      <div
        className={classNames('absolute w-full h-full top-0 left-0 opacity-100')}
        style={{
          background: createBackgroundStyle(background),
          backgroundSize: background?.size || 'auto'
        }}
      />
      <div
        className={classNames('relative overflow-hidden')}
        style={{
          height: height
        }}
      >
        <section className="container">
          <div
            className={classNames('flex flex-col py-6 max-h-screen h-7', [
              position === 'top-left' && 'justify-start items-start text-left',
              position === 'top-center' && 'justify-start items-center text-center',
              position === 'top-right' && 'justify-start items-end text-right',
              position === 'center-left' && 'justify-center items-start text-left',
              position === 'center-center' && 'justify-center items-center text-center',
              position === 'center-right' && 'justify-center items-end text-right',
              position === 'bottom-left' && 'justify-end items-start text-left',
              position === 'bottom-center' && 'justify-end items-center text-center',
              position === 'bottom-right' && 'justify-end items-end text-right'
            ])}
            style={{
              height: height
            }}
          >
            {customForeground ? customForeground(defaultElement) : defaultElement}
          </div>
        </section>
      </div>
    </div>
  );
};
