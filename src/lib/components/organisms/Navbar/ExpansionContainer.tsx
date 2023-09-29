import cs from 'classnames';
import type { FC } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { useNavbarContext } from './NavbarContext';

export type NavbarExpansionItem = {
  label: string;
  href: string;
};

export interface NavbarExpansionProps {
  sideContent?: React.ReactNode;
  children?: React.ReactNode;
  topPositionValue?: string;
}

export const ExpansionContainer: FC<NavbarExpansionProps> = ({ sideContent, children, topPositionValue = '65px' }) => {
  const { expansion, handleMouseEnter, handleMouseLeave } = useNavbarContext();

  const theme = useTheme().theme.navbar.group;

  const style = {
    top: topPositionValue,
    '@media (min-width: 768px)': {
      top: '0'
    }
  };

  return (
    <div
      className={twMerge(
        twJoin(
          'flex md:max-h-96 md:min-h-[200px] md:py-5 cursor-default md:px-5 md:fixed w-full md:rounded-t-none rounded-t-md rounded-b-md bg-slate-100 md:items-start items-center flex-col left-0 transition duration-300 ease-in-out overflow-hidden top-0 md:z-10',
          theme.container.base,
          !expansion && twMerge(cs('md:-translate-y-full md:scale-y-0 opacity-0 md:h-fit h-0', theme.container.opened))
        )
      )}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex md:container">
        {sideContent && <div className="hidden h-fit min-w-[120px] md:block">{sideContent}</div>}
        <div
          className={cs({
            'flex flex-col flex-wrap gap-4 gap-x-20 px-5 py-6 md:py-0': true,
            'border-l-0 md:border-l': !!sideContent
          })}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
