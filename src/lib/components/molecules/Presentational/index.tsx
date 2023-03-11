import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { PresentationalIcon } from './PresentationalIcon';
import { PresentationalLine } from './PresentationalLine';
import { PresentationalTitle } from './PresentationTitle';

export type PresentationalComponentProps = Omit<PropsWithChildren<ComponentProps<'div'>>, 'className'>;

const PresentationalComponent: FC<PresentationalComponentProps> = ({ children }) => {
  const theme = useTheme().theme.presentational;

  return <div className={classNames(theme.base)}>{children}</div>;
};

PresentationalComponent.displayName = 'Presentational';
PresentationalIcon.displayName = 'Presentational.Icon';
PresentationalTitle.displayName = 'Presentational.Title';
PresentationalLine.displayName = 'Presentational.Line';

export const Presentational = Object.assign(PresentationalComponent, {
  Icon: PresentationalIcon,
  Title: PresentationalTitle,
  Line: PresentationalLine
});
