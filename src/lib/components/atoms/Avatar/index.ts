import { Avatar as AvatarComponent } from './Avatar';
import { AvatarGroup as AvatarGroupComponent } from './AvatarGroup';
import { AvatarGroupCounter as AvatarGroupCounterComponent } from './AvatarGroupCounter';

AvatarGroupCounterComponent.displayName = 'Avatar.GroupCounter';
AvatarGroupComponent.displayName = 'Avatar.Group';
AvatarGroupCounterComponent.displayName = 'Avatar.GroupCounter';

AvatarComponent.displayName = 'Avatar';
export const Avatar = Object.assign(AvatarComponent, {
  Group: AvatarGroupComponent,
  Counter: AvatarGroupCounterComponent
});
