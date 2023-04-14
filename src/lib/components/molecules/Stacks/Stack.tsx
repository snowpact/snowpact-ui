import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { excludeClassName } from '../../../helpers/exclude';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export interface StackProps extends PropsWithChildren<Omit<ComponentProps<'div' | 'p'>, 'className'>> {
  horizontal?: boolean;
}

export const Stack: FC<StackProps> = ({ horizontal, children, ...props }): JSX.Element => {
  const theirProps = excludeClassName(props);
  const theme = useTheme().theme.stacks.stacksList;
  return (
    <div className={classNames(theme.base, [horizontal && theme.horizontal])} {...theirProps}>
      {children}
    </div>
  );
};
