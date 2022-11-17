import { ComponentProps, FC, PropsWithChildren } from 'react';
import { CameraRollImage } from './CameraRollImage';

export interface CameraRollProps extends Omit<PropsWithChildren<ComponentProps<'div'>>, 'className'> {}

const CameraRollComponent: FC<CameraRollProps> = ({ children }) => {
  return (
    <div className="grid gap-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
};

CameraRollComponent.displayName = 'CameraRoll.Component';
CameraRollImage.displayName = 'CameraRollImage.Image';

export const CameraRoll = Object.assign(CameraRollComponent, {
  Image: CameraRollImage,
});
