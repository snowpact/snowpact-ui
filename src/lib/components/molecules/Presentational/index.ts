import { Presentational as PresentationalComponent } from './Presentational';
import { PresentationalIcon as PresentationalIconComponent } from './PresentationalIcon';
import { PresentationalLine as PresentationalLineComponent } from './PresentationalLine';
import { PresentationalTitle as PresentationalTitleComponent } from './PresentationTitle';

PresentationalComponent.displayName = 'Presentational';
PresentationalIconComponent.displayName = 'Presentational.Icon';
PresentationalTitleComponent.displayName = 'Presentational.Title';
PresentationalLineComponent.displayName = 'Presentational.Line';

export const Presentational = Object.assign(PresentationalComponent, {
  Icon: PresentationalIconComponent,
  Title: PresentationalTitleComponent,
  Line: PresentationalLineComponent
});
