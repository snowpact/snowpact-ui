import { Tag as TagComponent } from './Tag';
import { TagItem as TagItemComponent } from './TagItem';

TagComponent.displayName = 'Tag';
TagItemComponent.displayName = 'Tag.Item';

export const Tag = Object.assign(TagComponent, { Item: TagItemComponent });
