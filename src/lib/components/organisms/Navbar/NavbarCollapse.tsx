import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';
import { excludeClassName } from '../../../helpers/exclude';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { useNavbarContext } from './NavbarContext';

export type NavbarCollapseProps = Omit<PropsWithChildren<ComponentProps<'div'>>, 'className'>;

export const NavbarCollapse: FC<NavbarCollapseProps> = ({ children, ...props }): JSX.Element => {
  const { isOpen } = useNavbarContext();

  const theme = useTheme().theme.navbar.collapse;
  const theirProps = excludeClassName(props);

  return (
    <div
      className={twMerge(twMerge('w-full md:block h-full', theme.base), twJoin(!isOpen && 'hidden'))}
      data-testid="flowbite-navbar-collapse"
      {...theirProps}
    >
      <ul
        className={twMerge(
          'mt-4 flex flex-col md:mt-0 md:flex-row items-center w-full md:justify-end md:gap-10 gap-0 h-full',
          theme.list
        )}
      >
        {children}
      </ul>
    </div>
  );
};
