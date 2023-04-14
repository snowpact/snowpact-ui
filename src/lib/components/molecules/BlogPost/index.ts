import { BlogPost as BlogPostComponent } from './BlogPost';
import { BlogPostItem as BlogPostItemComponent } from './BlogPostItem';

BlogPostComponent.displayName = 'BlogPost';
BlogPostItemComponent.displayName = 'BlogPost.Item';

export const BlogPost = Object.assign(BlogPostComponent, { Item: BlogPostItemComponent });
