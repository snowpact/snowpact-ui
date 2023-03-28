import { Table as TableComponent } from './Table';
import { TableBody as TableBodyComponent } from './TableBody';
import { TableCell as TableCellComponent } from './TableCell';
import { TableHead as TableHeadComponent } from './TableHead';
import { TableHeadCell as TableHeadCellComponent } from './TableHeadCell';
import { TableRow as TableRowComponent } from './TableRow';

TableComponent.displayName = 'Table';
TableHeadComponent.displayName = 'Table.Head';
TableBodyComponent.displayName = 'Table.Body';
TableRowComponent.displayName = 'Table.Row';
TableCellComponent.displayName = 'Table.Cell';
TableHeadCellComponent.displayName = 'Table.HeadCell';

export const Table = Object.assign(TableComponent, {
  Head: TableHeadComponent,
  Body: TableBodyComponent,
  Row: TableRowComponent,
  Cell: TableCellComponent,
  HeadCell: TableHeadCellComponent
});
