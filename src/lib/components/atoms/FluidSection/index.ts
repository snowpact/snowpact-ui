import { FluidSection as FluidSectionComponent } from './FluidSection';
import { FluidSectionBackground as FluidSectionBackgroundComponent } from './FluidSectionBackground';
import { FluidSectionInner as FluidSectionInnerComponent } from './FluidSectionInner';

FluidSectionComponent.displayName = 'FluidSection';
FluidSectionInnerComponent.displayName = 'FluidSection.Inner';
FluidSectionBackgroundComponent.displayName = 'FluidSection.Background';

export const FluidSection = Object.assign(FluidSectionComponent, {
  Inner: FluidSectionInnerComponent,
  Background: FluidSectionBackgroundComponent
});
