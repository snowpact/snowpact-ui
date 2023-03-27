import { TabItem as TabItemComponent } from './TabItem';
import { Tabs as TabsComponent } from './Tabs';

TabsComponent.displayName = 'Tabs.Group';
TabItemComponent.displayName = 'Tabs.Item';
export const Tabs = Object.assign({ Group: TabsComponent, Item: TabItemComponent });
