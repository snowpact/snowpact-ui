import { ListGroup as ListGroupComponent } from './ListGroup';
import { ListGroupItem as ListGroupItemComponent } from './ListGroupItem';

ListGroupComponent.displayName = 'ListGroup';
ListGroupItemComponent.displayName = 'ListGroup.Item';

export const ListGroup = Object.assign(ListGroupComponent, { Item: ListGroupItemComponent });
