import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export interface StackItemProps
  extends PropsWithChildren<Omit<ComponentProps<'div' | 'p' | 'a' | 'img' | 'strong'>, 'className'>> {
  title: string;
  link?: string;
}

export const StackItem: FC<StackItemProps> = ({ link, children, title }): JSX.Element => {
  const theme = useTheme().theme.stacks.stackItem;

  const Component = typeof link === 'undefined' ? 'div' : 'a';

  return (
    <Component className={classNames(theme.link.base, [link && theme.link.withLink])} href={link}>
      {children}
      <p className={theme.text}>
        <strong>{title}</strong>
      </p>
    </Component>
  );
};
