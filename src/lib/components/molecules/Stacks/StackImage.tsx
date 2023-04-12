import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export interface StackImageProps
  extends PropsWithChildren<Omit<ComponentProps<'div' | 'p' | 'a' | 'img' | 'strong'>, 'className'>> {
  image: string;
  alt: string;
  grayscale?: boolean;
}

export const StackImage: FC<StackImageProps> = ({ alt, image, grayscale }): JSX.Element => {
  const theme = useTheme().theme.stacks.stackImage;
  return (
    <img
      src={image}
      alt={alt}
      height={40}
      width={40}
      className={classNames(theme.base, grayscale && theme.withGrayscale)}
    />
  );
};
