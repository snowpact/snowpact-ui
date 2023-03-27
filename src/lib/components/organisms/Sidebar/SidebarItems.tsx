import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { excludeClassName } from '../../../helpers/exclude';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export const SidebarItems: FC<PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>>> = ({
  children,
  ...props
}): JSX.Element => {
  const theirProps = excludeClassName(props);

  const theme = useTheme().theme.sidebar.items;

  return (
    <div className={theme} data-testid="flowbite-sidebar-items" {...theirProps}>
      {children}
    </div>
  );
};
