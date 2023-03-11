import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { CameraRollImage } from './CameraRollImage';

export type CameraRollProps = Omit<PropsWithChildren<ComponentProps<'div'>>, 'className'>;

const CameraRollComponent: FC<CameraRollProps> = ({ children }) => {
  const theme = useTheme().theme.cameraRoll;

  return <div className={theme.base}>{children}</div>;
};

CameraRollComponent.displayName = 'CameraRoll.Component';
CameraRollImage.displayName = 'CameraRollImage.Image';

export const CameraRoll = Object.assign(CameraRollComponent, {
  Image: CameraRollImage
});
