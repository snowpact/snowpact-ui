import type { ComponentProps, FC, PropsWithChildren } from 'react';


export interface PresentationalTitleProps extends Omit<PropsWithChildren<ComponentProps<'a'>>, 'className'> {
    header: string;
}

export const PresentationalTitle: FC<PresentationalTitleProps> = ({ header }) => {
  return (
    <h3 className='text-center bold'>
        {header}
    </h3>
  );
};
