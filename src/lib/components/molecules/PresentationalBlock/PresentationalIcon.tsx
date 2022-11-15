import type { ComponentProps, FC, PropsWithChildren } from 'react';

export interface PresentationalIconProps extends Omit<PropsWithChildren<ComponentProps<'h2'>>, 'className'> {
    icon: React.ReactNode;
  }

export const PresentationalIcon: FC<PresentationalIconProps> = ({ icon }) => {
  return (
    <div className="flex p-4 mt-5 bg-yellow-400 rounded-full">{icon}</div>
  );
};
