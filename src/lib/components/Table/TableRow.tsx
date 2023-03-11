import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTableContext } from './TableContext';

export type TableRowProps = PropsWithChildren<ComponentProps<'tr'>>;

export const TableRow: FC<TableRowProps> = ({ children, className, ...props }) => {
  const { striped, hoverable } = useTableContext();

  return (
    <tr
      data-testid="table-row-element"
      className={classNames(
        {
          'odd:bg-white even:bg-gray-50 ': striped,
          'hover:bg-gray-50:bg-gray-600': hoverable
        },
        className
      )}
      {...props}
    >
      {children}
    </tr>
  );
};
