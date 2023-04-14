import type { ComponentProps, FC, PropsWithChildren } from 'react';

export type TagProps = PropsWithChildren<Omit<ComponentProps<'span'>, 'className'>>;

export const Tag: FC<TagProps> = ({ children }): JSX.Element => {
  return <span>{children}</span>;
};
