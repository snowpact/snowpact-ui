import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { Tag } from '../../atoms/Tag';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { PostAuthor } from '../../organisms/PostAuthor';

export interface BlogPostItemProps extends PropsWithChildren<Omit<ComponentProps<'a' | 'button'>, 'className'>> {
  title: string;
  description?: string;
  image: string;
  tags?: string[];
  link: string;
  variant?: 'vertical' | 'horizontal';
  authorImage: string;
  authorName: string;
  publicationDate?: Date;
  readingTime?: number;
}

export const BlogPostItem: FC<BlogPostItemProps> = ({
  title,
  description,
  image,
  tags,
  link,
  variant = 'vertical',
  authorName,
  authorImage,
  publicationDate,
  readingTime
}): JSX.Element => {
  const theme = useTheme().theme.blogPost.items;

  const Component = typeof link === 'undefined' ? 'div' : 'a';
  return (
    <Component href={link}>
      <div
        className={classNames(theme.base, [
          variant === 'vertical' && theme.variant.vertical,
          variant === 'horizontal' && theme.variant.horizontal
        ])}
      >
        <img
          src={image}
          alt={authorName}
          width={500}
          height={50}
          className={classNames(theme.image.base, [
            variant === 'vertical' && theme.image.variant.vertical,
            variant === 'horizontal' && theme.image.variant.horizontal
          ])}
        />

        <div
          className={classNames(theme.blogContent.base, [
            variant === 'horizontal' && theme.blogContent.variant.horizontal,
            variant === 'vertical' && theme.blogContent.variant.vertical
          ])}
        >
          <div className={theme.blogContent.textContent.base}>
            <span
              className={classNames(theme.blogContent.textContent.tags.base, [
                variant === 'horizontal' && theme.blogContent.textContent.tags.variant.horizontal
              ])}
            >
              {tags && (
                <Tag>
                  {tags.map((tag, index) => (
                    <Tag.Item key={index} hashtag last={index === tags.length - 1}>
                      {tag}
                    </Tag.Item>
                  ))}
                </Tag>
              )}
            </span>

            <div className={theme.blogContent.textContent.paragraph.base}>
              <p className={theme.blogContent.textContent.paragraph.title}>{title}</p>
              <div className="">
                <p className={theme.blogContent.textContent.paragraph.description}>{description}</p>
              </div>
            </div>
          </div>
          <PostAuthor
            authorImage={authorImage}
            authorName={authorName}
            publicationDate={publicationDate}
            readingTime={readingTime}
          />
        </div>
      </div>
    </Component>
  );
};
