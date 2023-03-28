import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export type PresentationalComponentProps = Omit<PropsWithChildren<ComponentProps<'div'>>, 'className'>;

export const Presentational: FC<PresentationalComponentProps> = ({ children }) => {
  const theme = useTheme().theme.presentational;

  return <div className={classNames(theme.base)}>{children}</div>;
};
