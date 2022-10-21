import React from 'react';

import classNames from 'classnames';
import { SECTION_THEME } from './Section.theme';

export type SectionProps = {
  children: React.ReactNode;
  id?: string;
  innerClassName?: string;
  innerProps?: React.HTMLAttributes<HTMLDivElement>;
};

const SectionComponent: React.FC<SectionProps> = ({ id, children, innerClassName, innerProps }) => {
  return (
    <section id={id} className="">
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
    return (
        <div className={classNames('relative', SECTION_THEME.container, className, spaced && SECTION_THEME.spaced)} {...props}>
      {children}
    </div>
  );
};

SectionComponent.displayName = 'Section';
SectionContainer.displayName = 'Section.Container';

export const Section = Object.assign(SectionComponent, {
  Container: SectionContainer,
});

