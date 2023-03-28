import { Timeline as TimelineComponent } from './Timeline';
import { TimelineBody as TimelineBodyComponent } from './TimelineBody';
import { TimelineContent as TimelineContentComponent } from './TimelineContent';
import { TimelineItem as TimelineItemComponent } from './TimelineItem';
import { TimelinePoint as TimelinePointComponent } from './TimelinePoint';
import { TimelineTime as TimelineTimeComponent } from './TimelineTime';
import { TimelineTitle as TimelineTitleComponent } from './TimelineTitle';

TimelineComponent.displayName = 'Timeline';
TimelineItemComponent.displayName = 'Timeline.Item';
TimelinePointComponent.displayName = 'Timeline.Point';
TimelineContentComponent.displayName = 'Timeline.Content';
TimelineTimeComponent.displayName = 'Timeline.Time';
TimelineTitleComponent.displayName = 'Timeline.Title';
TimelineBodyComponent.displayName = 'Timeline.Body';

export const Timeline = Object.assign(TimelineComponent, {
  Item: TimelineItemComponent,
  Point: TimelinePointComponent,
  Content: TimelineContentComponent,
  Time: TimelineTimeComponent,
  Title: TimelineTitleComponent,
  Body: TimelineBodyComponent
});
