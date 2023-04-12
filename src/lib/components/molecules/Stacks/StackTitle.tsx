import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';

import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export interface StackTitleProps extends PropsWithChildren<Omit<ComponentProps<'div' | 'p'>, 'className'>> {
  horizontal?: boolean;
}

export const StackTitle: FC<StackTitleProps> = ({ horizontal, children }): JSX.Element => {
  const theme = useTheme().theme.stacks.title;
  return (
    <div className={classNames(theme.base, horizontal && theme.horizontal)}>
      <p className={classNames(theme.text)}>{children}</p>
    </div>
  );
};
