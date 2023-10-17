import classNames from 'classnames';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export type ForeGroundPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'center-left'
  | 'center'
  | 'center-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface HeroProps {
  backgroundImage?: string;
  backgroundPosition?: 'top' | 'center' | 'bottom' | 'left' | 'right' | string;
  backgroundSize?: 'auto' | 'cover' | 'contain' | string;
  backgroundRepeat?: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat' | string;
  backgroundClassName?: string;
  imageClassName?: string;
  position?: ForeGroundPosition;
  centerPositionOnMobile?: boolean;
  height?: string;
  foregroundMaxWidth?: string;
  children: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({
  children,
  backgroundImage,
  backgroundPosition,
  backgroundSize,
  backgroundRepeat,
  backgroundClassName,
  imageClassName,
  position,
  centerPositionOnMobile,
  height = '600px',
  foregroundMaxWidth
}) => {
  const { hero: theme } = useTheme().theme;

  return (
    <div className="relative">
      <div
        className={classNames('absolute w-full h-full top-0 left-0 opacity-100 bg-no-repeat', backgroundClassName)}
        style={{
          background: backgroundImage ? `url('${backgroundImage}')` : undefined,
          backgroundPosition: backgroundPosition,
          backgroundSize: backgroundSize,
          backgroundRepeat: backgroundRepeat
        }}
      />
      <div
        className={classNames('relative overflow-hidden', imageClassName)}
        style={{
          height: height
        }}
      >
        <section className={'container grid w-full'}>
          <div
            className={twMerge(
              classNames('flex flex-col py-6 max-h-screen h-7', theme.foregroundMaxWidth, theme.foregroundWrapper, [
                position === 'top-left' && 'justify-start items-start text-left',
                position === 'top-center' && 'justify-start items-center text-center justify-self-center',
                position === 'top-right' && 'justify-start items-end text-right justify-self-end',
                position === 'center-left' && 'justify-center items-start text-left',
                position === 'center' && 'justify-center items-center text-center justify-self-center',
                position === 'center-right' && 'justify-center items-end text-right justify-self-end',
                position === 'bottom-left' && 'justify-end items-start text-left',
                position === 'bottom-center' && 'justify-end items-center text-center justify-self-center',
                position === 'bottom-right' && 'justify-end items-end text-right justify-self-end',
                centerPositionOnMobile &&
                  'mobile-only:justify-center mobile-only:items-center mobile-only:text-center mobile-only:justify-self-center mobile-only:w-full'
              ])
            )}
            style={{
              height: height,
              maxWidth: centerPositionOnMobile ? undefined : foregroundMaxWidth
            }}
          >
            {children}
          </div>
        </section>
      </div>
    </div>
  );
};
