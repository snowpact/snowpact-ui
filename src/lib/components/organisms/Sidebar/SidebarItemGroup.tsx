import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { excludeClassName } from '../../../helpers/exclude';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { SidebarItemContext } from './SidebarItemContext';

export const SidebarItemGroup: FC<PropsWithChildren<Omit<ComponentProps<'ul'>, 'className'>>> = ({
  children,
  ...props
}) => {
  const theirProps = excludeClassName(props);

  const theme = useTheme().theme.sidebar.itemGroup;

  return (
    <ul className={theme} data-testid="flowbite-sidebar-item-group" {...theirProps}>
      <SidebarItemContext.Provider value={{ isInsideCollapse: false }}>{children}</SidebarItemContext.Provider>
    </ul>
  );
};
