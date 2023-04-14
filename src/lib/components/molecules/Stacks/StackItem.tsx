import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export interface StackItemProps
  extends PropsWithChildren<Omit<ComponentProps<'div' | 'p' | 'a' | 'img' | 'strong'>, 'className'>> {
  title: string;
  image: string;
  alt: string;
  grayscale?: boolean;
  link?: string;
}

export const StackItem: FC<StackItemProps> = ({ link, title, alt, grayscale, image }): JSX.Element => {
  const theme = useTheme().theme.stacks.stackItem;

  const Component = typeof link === 'undefined' ? 'div' : 'a';

  return (
    <Component className={classNames(theme.link.base, [link && theme.link.withLink])} href={link}>
      <img
        src={image}
        alt={alt}
        height={40}
        width={40}
        className={classNames(theme.stackImage.base, grayscale && theme.stackImage.withGrayscale)}
      />
      <p className={theme.text}>
        <strong>{title}</strong>
      </p>
    </Component>
  );
};
