import { Footer as FooterComponent } from './Footer';
import { FooterBrand as FooterBrandComponent } from './FooterBrand';
import { FooterCopyright as FooterCopyrightComponent } from './FooterCopyright';
import { FooterDivider as FooterDividerComponent } from './FooterDivider';
import { FooterIcon as FooterIconComponent } from './FooterIcon';
import { FooterLink as FooterLinkComponent } from './FooterLink';
import { FooterLinkGroup as FooterLinkGroupComponent } from './FooterLinkGroup';
import { FooterTitle as FooterTitleComponent } from './FooterTitle';

FooterComponent.displayName = 'Footer';
FooterCopyrightComponent.displayName = 'Footer.Copyright';
FooterLinkComponent.displayName = 'Footer.Link';
FooterBrandComponent.displayName = 'Footer.Brand';
FooterLinkGroupComponent.displayName = 'Footer.LinkGroup';
FooterIconComponent.displayName = 'Footer.Icon';
FooterTitleComponent.displayName = 'Footer.Title';
FooterDividerComponent.displayName = 'Footer.Divider';

export const Footer = Object.assign(FooterComponent, {
  Copyright: FooterCopyrightComponent,
  Link: FooterLinkComponent,
  LinkGroup: FooterLinkGroupComponent,
  Brand: FooterBrandComponent,
  Icon: FooterIconComponent,
  Title: FooterTitleComponent,
  Divider: FooterDividerComponent
});
