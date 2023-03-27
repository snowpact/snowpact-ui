import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { TableContextType } from './TableContext';
import { TableContext } from './TableContext';

export type TableProps = PropsWithChildren<ComponentProps<'table'> & TableContextType>;

export const Table: FC<TableProps> = ({ children, striped, hoverable, className, ...props }) => {
  return (
    <div data-testid="table-element" className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <TableContext.Provider value={{ striped, hoverable }}>
        <table className={classNames('w-full text-left text-sm text-gray-500', className)} {...props}>
          {children}
        </table>
      </TableContext.Provider>
    </div>
  );
};
