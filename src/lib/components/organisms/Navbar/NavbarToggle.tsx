import type { ComponentProps, FC } from 'react';
import { FaBars } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
import { excludeClassName } from '../../../helpers/exclude';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { useNavbarContext } from './NavbarContext';

export interface NavbarToggleProps extends Omit<ComponentProps<'button'>, 'className'> {
  barIcon?: FC<ComponentProps<'svg'>>;
  closeIcon?: FC<ComponentProps<'svg'>>;
}

export const NavbarToggle: FC<NavbarToggleProps> = ({
  barIcon: BarIcon = FaBars,
  closeIcon: CloseIcon = FaBars,
  ...props
}) => {
  const { isOpen, setIsOpen } = useNavbarContext();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const theme = useTheme().theme.navbar.toggle;
  const theirProps = excludeClassName(props);

  return (
    <button
      className={twMerge(
        'inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200:bg-gray-700:ring-gray-600 md:hidden',
        theme.base
      )}
      data-testid="flowbite-navbar-toggle"
      onClick={handleClick}
      {...theirProps}
    >
      <span className="sr-only">Open main menu</span>
      {!isOpen && <BarIcon className={twMerge('h-6 w-6 shrink-0', theme.icon)} />}
      {isOpen && <CloseIcon className={twMerge('h-6 w-6 shrink-0', theme.icon)} />}
    </button>
  );
};
