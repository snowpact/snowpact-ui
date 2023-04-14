import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { Fragment } from 'react';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export type TagOptions = {
  label: string;
  link?: string;
};

type SeparatorTypes = 'comma' | 'dot' | 'space' | 'dash';

const SEPARATOR_MARKUP: Record<SeparatorTypes, string> = {
  comma: ', ',
  dot: '. ',
  space: ' ',
  dash: ' - '
};

export interface TagItemProps extends PropsWithChildren<Omit<ComponentProps<'a' | 'span'>, 'className'>> {
  tagLink?: string;
  separator?: SeparatorTypes;
  hashtag?: boolean;
  last?: boolean;
}

export const TagItem: FC<TagItemProps> = ({
  tagLink,
  separator = 'space',
  hashtag = false,
  last,
  children
}): JSX.Element => {
  const sep = separator in SEPARATOR_MARKUP ? SEPARATOR_MARKUP[separator] : '';

  const Component = typeof tagLink === 'undefined' ? 'span' : 'a';

  const theme = useTheme().theme.tag.items;

  return (
    <Fragment>
      <span className={classNames(tagLink && theme.base)}>
        <Component href={tagLink}>
          {hashtag && '#'}
          <strong>{children}</strong>
        </Component>
      </span>
      {!last && <span>{sep}</span>}
    </Fragment>
  );
};
