import { Navbar as NavbarComponent } from './Navbar';
import { NavbarBrand } from './NavbarBrand';
import { NavbarCollapse } from './NavbarCollapse';
import { NavbarGroup } from './NavbarGroup';
import { NavbarLink } from './NavbarLink';
import { NavbarToggle } from './NavbarToggle';

NavbarComponent.displayName = 'Navbar';
NavbarBrand.displayName = 'Navbar.Brand';
NavbarCollapse.displayName = 'Navbar.Collapse';
NavbarLink.displayName = 'Navbar.Link';
NavbarToggle.displayName = 'Navbar.Toggle';
NavbarGroup.displayName = 'Navbar.Group';

export const Navbar = Object.assign(NavbarComponent, {
  Brand: NavbarBrand,
  Collapse: NavbarCollapse,
  Link: NavbarLink,
  Toggle: NavbarToggle,
  Group: NavbarGroup
});
