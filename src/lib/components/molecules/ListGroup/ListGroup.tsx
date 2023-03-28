import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { excludeClassName } from '../../../helpers/exclude';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export type ListGroupProps = PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>>;

export const ListGroup: FC<ListGroupProps> = ({ children, ...props }): JSX.Element => {
  const theirProps = excludeClassName(props);

  const theme = useTheme().theme.listGroup.base;

  return (
    <ul className={theme} {...theirProps}>
      {children}
    </ul>
  );
};
