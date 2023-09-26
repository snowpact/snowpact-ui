import cs from 'classnames';
import type { FC } from 'react';
import { Navbar } from '.';

export type NavbarExpansionItem = {
  label: string;
  href: string;
};

export interface NavbarExpansionProps {
  groupName?: string;
  groupLink?: string;
  withUnderlineEffect?: boolean;
  children?: React.ReactNode;
}

export const NavbarExpansion: FC<NavbarExpansionProps> = ({
  groupName,
  groupLink,
  withUnderlineEffect = false,
  children
}) => {
  return (
    <div className="flex md:container md:max-h-96 md:min-h-[200px] md:py-5">
      {groupName && (
        <div className="hidden h-fit min-w-[120px] md:block">
          <div className="w-fit">
            {groupLink ? (
              <Navbar.Link href={groupLink} withUnderlineEffect={withUnderlineEffect}>
                {groupName}
              </Navbar.Link>
            ) : (
              <span className="underline">{groupName}</span>
            )}
          </div>
        </div>
      )}
      <div
        className={cs({
          'flex flex-col flex-wrap gap-4 gap-x-20 px-5 py-6 md:py-0': true,
          'border-l-0 md:border-l': groupName
        })}
      >
        {children}
      </div>
    </div>
  );
};
