import classNames from 'classnames';
import type { FC } from 'react';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import { LinkOrDiv } from '../../bosons';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export interface BreadcrumbItemProps {
  children: string;
  href?: string;
  icon?: React.ReactNode;
  as?: React.ElementType;
}

export const BreadcrumbItem: FC<BreadcrumbItemProps> = ({ children, href, icon, as }): JSX.Element => {
  const theme = useTheme().theme.breadcrumb;

  return (
    <li className={twMerge(classNames('group flex items-center', theme.text))}>
      <HiOutlineChevronRight
        aria-hidden
        className={twMerge(classNames('h-full group-first:hidden md:mx-2', theme.chevron))}
        data-testid="sui-breadcrumb-separator"
      />
      <LinkOrDiv
        linkComponent={as}
        className={twMerge(classNames('flex items-center font-medium', href && theme.href))}
        href={href}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </LinkOrDiv>
    </li>
  );
};
