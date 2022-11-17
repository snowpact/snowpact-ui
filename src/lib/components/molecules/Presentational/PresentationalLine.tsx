import classNames from 'classnames';
import type { FC, PropsWithChildren } from 'react';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';


export interface PresentationalLineProps extends Omit<PropsWithChildren, 'className'> {}

export const PresentationalLine: FC<PresentationalLineProps> = ({ children }) => {
  const theme = useTheme().theme.presentationalBlock;

  return (
    <p className={classNames(theme.description)}>
        {children}
    </p>
  );
};
