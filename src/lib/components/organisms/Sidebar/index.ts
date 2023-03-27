import { Sidebar as SidebarComponent } from './Sidebar';
import { SidebarCollapse as SidebarCollapseComponent } from './SidebarCollapse';
import { SidebarCTA as SidebarCTAComponent } from './SidebarCTA';
import { SidebarItem as SidebarItemComponent } from './SidebarItem';
import { SidebarItemGroup as SidebarItemGroupComponent } from './SidebarItemGroup';
import { SidebarItems as SidebarItemsComponent } from './SidebarItems';
import { SidebarLogo as SidebarLogoComponent } from './SidebarLogo';

SidebarComponent.displayName = 'Sidebar';
SidebarItemGroupComponent.displayName = 'Sidebar.ItemGroup';
SidebarItemComponent.displayName = 'Sidebar.Item';
SidebarItemsComponent.displayName = 'Sidebar.Items';
SidebarLogoComponent.displayName = 'Sidebar.Logo';
SidebarCollapseComponent.displayName = 'Sidebar.Collapse';
SidebarCTAComponent.displayName = 'Sidebar.CTA';

export const Sidebar = Object.assign(SidebarComponent, {
  Collapse: SidebarCollapseComponent,
  CTA: SidebarCTAComponent,
  Item: SidebarItemComponent,
  Items: SidebarItemsComponent,
  ItemGroup: SidebarItemGroupComponent,
  Logo: SidebarLogoComponent
});
