import { Dropdown as DropdownComponent } from './Dropdown';
import { DropdownDivider as DropdownDividerComponent } from './DropdownDivider';
import { DropdownHeader as DropdownHeaderComponent } from './DropdownHeader';
import { DropdownItem as DropdownItemComponent } from './DropdownItem';

DropdownComponent.displayName = 'Dropdown';
DropdownItemComponent.displayName = 'Dropdown.Item';
DropdownHeaderComponent.displayName = 'Dropdown.Header';
DropdownDividerComponent.displayName = 'Dropdown.Divider';

export const Dropdown = Object.assign(DropdownComponent, {
  Item: DropdownItemComponent,
  Header: DropdownHeaderComponent,
  Divider: DropdownDividerComponent
});
