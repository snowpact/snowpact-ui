import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export interface PresentationalIconProps extends Omit<PropsWithChildren<ComponentProps<'h2'>>, 'className'> {
    icon: React.ReactNode;
  }

export const PresentationalIcon: FC<PresentationalIconProps> = ({ icon }) => {
  const theme = useTheme().theme.presentationalBlock;

  return (
    <div className={classNames(theme.icon)}>{icon}</div>
  );
};
