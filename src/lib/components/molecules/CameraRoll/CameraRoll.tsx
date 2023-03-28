import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export type CameraRollProps = Omit<PropsWithChildren<ComponentProps<'div'>>, 'className'>;

export const CameraRoll: FC<CameraRollProps> = ({ children }) => {
  const theme = useTheme().theme.cameraRoll;

  return <div className={theme.base}>{children}</div>;
};
