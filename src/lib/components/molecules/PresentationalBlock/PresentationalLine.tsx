import type { ComponentProps, FC, PropsWithChildren } from 'react';


export interface PresentationalLineProps extends Omit<PropsWithChildren<ComponentProps<'a'>>, 'className'> {
  description: string;
}

export const PresentationalLine: FC<PresentationalLineProps> = ({ description, children }) => {
  return (
    <>
      <p className='text-center'>
          {description}
      </p>
      {children && children}
    </>
  );
};
