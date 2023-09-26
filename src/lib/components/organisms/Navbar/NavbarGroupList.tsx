import cs from 'classnames';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '.';

export type NavbarGroupTitle = {
  label: string;
  href?: string;
};

export type NavbarGroupListItem = {
  label: string;
  href: string;
};

export interface NavbarGroupListProps {
  groupName: NavbarGroupTitle;
  items?: NavbarGroupListItem[];
  withSidebar?: boolean;
  withUnderlineEffect?: boolean;
}

export const NavbarGroupList: FC<NavbarGroupListProps> = ({
  groupName,
  items,
  withSidebar = false,
  withUnderlineEffect = false
}) => {
  if (items && items.length > 0) {
    return (
      <div className="flex md:container md:max-h-96 md:min-h-[200px] md:py-5">
        {withSidebar && (
          <div className="hidden h-fit min-w-[120px] md:block">
            <div className="w-fit">
              {groupName.href ? (
                <Navbar.Link href={groupName.href} withUnderlineEffect={withUnderlineEffect}>
                  {groupName.label}
                </Navbar.Link>
              ) : (
                <span className="underline">{groupName.label}</span>
              )}
            </div>
          </div>
        )}
        <div
          className={cs({
            'flex flex-col flex-wrap gap-4 gap-x-20 px-5 py-6 md:py-0': true,
            'border-l-0 md:border-l': withSidebar
          })}
        >
          {items.map((item, index) => (
            <span key={index} className="w-full md:w-fit">
              <Navbar.Link as={Link} href={item.href} withUnderlineEffect={withUnderlineEffect}>
                {item.label}
              </Navbar.Link>
            </span>
          ))}
        </div>
      </div>
    );
  } else return <></>;
};
