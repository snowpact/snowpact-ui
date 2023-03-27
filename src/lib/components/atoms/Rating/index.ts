import { Rating as RatingComponent } from './Rating';
import { RatingAdvanced as RatingAdvancedComponent } from './RatingAdvanced';
import { RatingStar as RatingStarComponent } from './RatingStar';

RatingComponent.displayName = 'Rating';
RatingStarComponent.displayName = 'Rating.Star';
RatingAdvancedComponent.displayName = 'Rating.Advanced';

export const Rating = Object.assign(RatingComponent, {
  Star: RatingStarComponent,
  Advanced: RatingAdvancedComponent
});
