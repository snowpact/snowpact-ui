import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export interface PostAuthorProps extends PropsWithChildren<Omit<ComponentProps<'a' | 'button'>, 'className'>> {
  authorName: string;
  authorImage: string;
  authorLink?: string;
  publicationDate?: Date | null;
  readingTime?: number;
}

export const PostAuthor: FC<PostAuthorProps> = ({
  authorName,
  authorImage,
  authorLink,
  publicationDate,
  readingTime
}): JSX.Element => {
  const theme = useTheme().theme.postAuthor;

  const Component = typeof authorLink === 'undefined' ? 'div' : 'a';

  return (
    <div className={theme.base}>
      <Component href={authorLink}>
        <img src={authorImage} alt={authorName} width={48} height={48} className={theme.image.base} />
      </Component>

      <div className={theme.infos.base}>
        <Component href={authorLink}>
          <p className={theme.infos.author.base}>{authorName}</p>
        </Component>
        <div className={theme.infos.post.base}>
          {readingTime && <p className={theme.infos.post.date}>{publicationDate?.toDateString()}</p>}
          {readingTime && <p className={theme.infos.post.readingTime}>• {readingTime} min de lecture</p>}
        </div>
      </div>
    </div>
  );
};
