import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { HIHeadingLevel } from '../../bosons/HelloInternet/HelloInternetTheme';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';


export interface PresentationalTitleProps extends Omit<PropsWithChildren<ComponentProps<'a'>>, 'className'> {
  tag?: HIHeadingLevel;
}

export const PresentationalTitle: FC<PresentationalTitleProps> = ({ children,  tag = 'h3' }) => {
    const theme = useTheme().theme.presentationalBlock;
    const Tag = tag;

    return (
    <Tag className={classNames(theme.header)}>{children}</Tag>
  );
};
