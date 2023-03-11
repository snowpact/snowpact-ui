import React from 'react';

import classNames from 'classnames';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export type MainContainerProps = {
  children: React.ReactNode;
  className?: string;
  spaced?: boolean;
};

export const MainContainer: React.FC<MainContainerProps> = ({ children, className, spaced, ...props }) => {
  const { mainContainer: theme } = useTheme().theme;
  return (
    <main
      data-testid="hi-main-container"
      className={classNames('relative', theme.container, className, spaced && theme.spaced)}
      {...props}
    >
      {children}
    </main>
  );
};
