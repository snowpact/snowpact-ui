import { Accordion as AccordionComponent } from './Accordion';
import { AccordionContent as AccordionContentComponent } from './AccordionContent';
import { AccordionPanel as AccordionPanelComponent } from './AccordionPanel';
import { AccordionTitle as AccordionTitleComponent } from './AccordionTitle';

AccordionComponent.displayName = 'Accordion';
AccordionPanelComponent.displayName = 'Accordion.Panel';
AccordionTitleComponent.displayName = 'Accordion.Title';
AccordionContentComponent.displayName = 'Accordion.Content';

export const Accordion = Object.assign(AccordionComponent, {
  Panel: AccordionPanelComponent,
  Title: AccordionTitleComponent,
  Content: AccordionContentComponent
});
