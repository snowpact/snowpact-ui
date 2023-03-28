import { Breadcrumb as BreadcrumbComponent } from './Breadcrumb';
import { BreadcrumbItem as BreadcrumbItemComponent } from './BreadcrumbItem';

BreadcrumbComponent.displayName = 'Breadcrumb';
BreadcrumbItemComponent.displayName = 'BreadcrumbItem';

export const Breadcrumb = Object.assign(BreadcrumbComponent, { Item: BreadcrumbItemComponent });
