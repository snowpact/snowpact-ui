import React from 'react';

import classNames from 'classnames';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export type SectionProps = {
  children: React.ReactNode;
  id?: string;
  innerClassName?: string;
  innerProps?: React.HTMLAttributes<HTMLDivElement>;
};

const SectionComponent: React.FC<SectionProps> = ({ id, children, innerClassName, innerProps }) => {

  return (
    <section data-testid="hi-section" id={id} className="">
      <div
        className={classNames('relative', innerClassName)}
        {...innerProps}
      >
        {children}
      </div>
    </section>
  );
};

type SectionContainerProps = {
  children: React.ReactNode;
    className?: string;
    innerProps?: React.HTMLAttributes<HTMLDivElement>;
  spaced?: boolean;
};

const SectionContainer: React.FC<SectionContainerProps> = ({ children, className, spaced, ...props }) => {

  const { section: theme } = useTheme().theme;
    return (
        <div data-testid="hi-section-container"  className={classNames('relative', theme.container, className, spaced && theme.spaced)} {...props}>
      {children}
    </div>
  );
};

SectionComponent.displayName = 'Section';
SectionContainer.displayName = 'Section.Container';

export const Section = Object.assign(SectionComponent, {
  Container: SectionContainer,
});

