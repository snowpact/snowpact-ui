import { Stack as StackComponent } from './Stack';
import { StackImage as StackImageComponent } from './StackImage';
import { StackItem as StackItemComponent } from './StackItem';
import { StackItemGroup as StackItemGroupComponent } from './StackItemGroup';
import { StackTitle as StackTitleComponent } from './StackTitle';

StackComponent.displayName = 'Stacks';
StackItemComponent.displayName = 'Stacks.Item';
StackItemGroupComponent.displayName = 'Stack.ItemGroup';
StackTitleComponent.displayName = 'Stacks.Title';
StackImageComponent.displayName = 'Stacks.Image';

export const Stack = Object.assign(StackComponent, {
  Item: StackItemComponent,
  ItemGroup: StackItemGroupComponent,
  Title: StackTitleComponent,
  Image: StackImageComponent
});
