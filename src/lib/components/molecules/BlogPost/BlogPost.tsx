import type { ComponentProps, FC, PropsWithChildren } from 'react';

import { excludeClassName } from '../../../helpers/exclude';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export type BlogPostProps = PropsWithChildren<Omit<ComponentProps<'a' | 'button'>, 'className'>>;

export const BlogPost: FC<BlogPostProps> = ({ children, ...props }) => {
  const theirProps = excludeClassName(props);

  const theme = useTheme().theme.blogPost.base;
  return (
    <div className={theme} {...theirProps}>
      {children}
    </div>
  );
};
