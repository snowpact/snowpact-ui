import { ComponentProps, FC, PropsWithChildren } from 'react';
import { PresentationalIcon } from './PresentationalIcon';
import { PresentationalLine } from './PresentationalLine';
import { PresentationalTitle } from './PresentationTitle';

export interface PresentationalBlockComponentProps extends Omit<PropsWithChildren<ComponentProps<'div'>>, 'className'> {
  items: React.ReactNode[];
}

export const PresentationalBlockComponent: FC<PresentationalBlockComponentProps> = ({ children, items }) => {
  return (
    <div className="flex flex-col items-center mx-50 md:flex-row md:items-baseline ">
      {items.map((item) => (
        <div className="flex flex-col items-center gap-3 mx-4 w-60">{item}</div>
      ))}
    </div>
  );
};

PresentationalBlockComponent.displayName = 'PresentationalBlock.Component';
PresentationalIcon.displayName = 'Presentational.Icon';
PresentationalTitle.displayName = 'Presentational.Title';
PresentationalLine.displayName = 'Presentational.Line';

export const PresentationalBlock = Object.assign(PresentationalBlockComponent, {
  Icon: PresentationalIcon,
  Title: PresentationalTitle,
  Line: PresentationalLine
});
