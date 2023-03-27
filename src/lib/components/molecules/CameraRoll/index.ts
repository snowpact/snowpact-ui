import { CameraRoll as CameraRollComponent } from './CameraRoll';
import { CameraRollImage as CameraRollImageComponent } from './CameraRollImage';

CameraRollComponent.displayName = 'CameraRoll.Component';
CameraRollImageComponent.displayName = 'CameraRollImage.Image';

export const CameraRoll = Object.assign(CameraRollComponent, {
  Image: CameraRollImageComponent
});
