import classNames from 'classnames';
import { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { PresentationalIcon } from './PresentationalIcon';
import { PresentationalLine } from './PresentationalLine';
import { PresentationalTitle } from './PresentationTitle';

export interface PresentationalBlockComponentProps extends Omit<PropsWithChildren<ComponentProps<'div'>>, 'className'> {}

export const PresentationalBlockComponent: FC<PresentationalBlockComponentProps> = ({ children }) => {
  const theme = useTheme().theme.presentationalBlock;

  return <div className={classNames(theme.base)}>
  {children}
</div>;
};

PresentationalBlockComponent.displayName = 'PresentationalBlock.Component';
PresentationalIcon.displayName = 'Presentational.Icon';
PresentationalTitle.displayName = 'Presentational.Title';
PresentationalLine.displayName = 'Presentational.Line';

export const PresentationalBlock = Object.assign(PresentationalBlockComponent, {
  Icon: PresentationalIcon,
  Title: PresentationalTitle,
  Line: PresentationalLine
});
