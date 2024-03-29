import classNames from 'classnames';
import type { ComponentProps, ElementType, FC, PropsWithChildren } from 'react';
import { useId } from 'react';
import { excludeClassName } from '../../../helpers/exclude';
import { Badge } from '../../atoms/Badge/Badge';
import { Tooltip } from '../../atoms/Tooltip/Tooltip';
import type { HIColors } from '../../bosons/HelloInternet/HelloInternetTheme';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { useSidebarContext } from './SidebarContext';
import { useSidebarItemContext } from './SidebarItemContext';

export interface SidebarItemProps
  extends PropsWithChildren<Omit<ComponentProps<'div'>, 'className'> & Record<string, unknown>> {
  active?: boolean;
  as?: ElementType;
  href?: string;
  icon?: FC<ComponentProps<'svg'>>;
  label?: string;
  //labelColor?: keyof SidebarItemLabelColors; //TODO:Use props or remove it
}

export interface SidebarItemLabelColors extends Pick<HIColors, 'gray'> {
  [key: string]: string;
}

export const SidebarItem: FC<SidebarItemProps> = ({
  as: Component = 'a',
  children,
  icon: Icon,
  active: isActive,
  label,
  //labelColor = 'info', //TODO:Use props or remove it
  ...props
}) => {
  const theirProps = excludeClassName(props);

  const id = useId();
  const { isCollapsed } = useSidebarContext();
  const { isInsideCollapse } = useSidebarItemContext();
  const theme = useTheme().theme.sidebar.item;

  const ListItem: FC<PropsWithChildren> = ({ children: wrapperChildren }) => (
    <li>
      {isCollapsed ? (
        <Tooltip content={<TooltipContent>{children}</TooltipContent>} placement="right">
          {wrapperChildren}
        </Tooltip>
      ) : (
        wrapperChildren
      )}
    </li>
  );

  const TooltipContent: FC<PropsWithChildren> = ({ children }) => <Children>{children}</Children>;

  const Children: FC<PropsWithChildren> = ({ children }) => (
    <span
      className={classNames(theme.content.base)}
      data-testid="flowbite-sidebar-item-content"
      id={`flowbite-sidebar-item-${id}`}
    >
      {children}
    </span>
  );

  return (
    <ListItem>
      <Component
        aria-labelledby={`flowbite-sidebar-item-${id}`}
        className={classNames(
          theme.base,
          isActive && theme.active,
          !isCollapsed && isInsideCollapse && theme.collapsed.insideCollapse
        )}
        {...theirProps}
      >
        {Icon && (
          <Icon
            aria-hidden
            className={classNames(theme.icon.base, isActive && theme.icon.active)}
            data-testid="flowbite-sidebar-item-icon"
          />
        )}
        {isCollapsed && !Icon && (
          <span className={theme.collapsed.noIcon}>{(children as string).charAt(0).toLocaleUpperCase() ?? '?'}</span>
        )}
        {!isCollapsed && <Children>{children}</Children>}
        {!isCollapsed && label && <Badge data-testid="flowbite-sidebar-label">{label}</Badge>}
      </Component>
    </ListItem>
  );
};
