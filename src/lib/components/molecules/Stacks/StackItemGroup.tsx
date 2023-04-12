import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';

import { excludeClassName } from '../../../helpers/exclude';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { StackTitle } from './StackTitle';

export interface StackItemGroupProps extends PropsWithChildren<Omit<ComponentProps<'div' | 'p'>, 'className'>> {
  horizontal?: boolean;
}

export const StackItemGroup: FC<StackItemGroupProps> = ({ horizontal, children, ...props }): JSX.Element => {
  const theirProps = excludeClassName(props);

  const theme = useTheme().theme.stacks;
  return (
    <div className={classNames(theme.base, theme.horizontal[horizontal ? 'on' : 'off'])}>
      <StackTitle horizontal={horizontal} />
      <div
        className={classNames(theme.stackList.base, theme.stackList.horizontal[horizontal ? 'on' : 'off'])}
        {...theirProps}
      >
        {children}
      </div>
    </div>
  );
};
