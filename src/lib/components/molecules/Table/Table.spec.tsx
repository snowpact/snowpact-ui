import { render, screen } from '@testing-library/react';
import type { FC } from 'react';
import { describe, expect, it } from 'vitest';
import { Table } from '.';
import type { TableProps } from './Table';

describe.concurrent('Components / Table', () => {
  it('should be able to render a table', () => {
    render(<TestTable />);

    expect(screen.getByTestId('table-element')).toBeTruthy();
  });

  it('should be able to render a striped table', () => {
    render(<TestTable striped />);

    const rows = screen.getAllByTestId('table-row-element');

    expect(rows.length).toEqual(5);
    expect(rows[0].className).toContain('odd:bg-white even:bg-gray-50');
  });

  it('should be able to render a hoverable table', () => {
    render(<TestTable hoverable />);

    const rows = screen.getAllByTestId('table-row-element');

    expect(rows.length).toEqual(5);
    expect(rows[0].className).toContain('hover:bg-gray-50:bg-gray-600');
  });
});

const TestTable: FC<TableProps> = (props) => (
  <Table {...props}>
    <Table.Head>
      <Table.HeadCell>Product name</Table.HeadCell>
      <Table.HeadCell>Color</Table.HeadCell>
      <Table.HeadCell>Category</Table.HeadCell>
      <Table.HeadCell>Price</Table.HeadCell>
      <Table.HeadCell>
        <span className="sr-only">Edit</span>
      </Table.HeadCell>
    </Table.Head>
    <Table.Body className="divide-y">
      <Table.Row className="bg-white">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900">{'Apple MacBook Pro 17"'}</Table.Cell>
        <Table.Cell>Sliver</Table.Cell>
        <Table.Cell>Laptop</Table.Cell>
        <Table.Cell>$2999</Table.Cell>
        <Table.Cell>
          <a href="/tables" className="font-medium text-blue-600 hover:underline">
            Edit
          </a>
        </Table.Cell>
      </Table.Row>
      <Table.Row className="bg-white">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900">Microsoft Surface Pro</Table.Cell>
        <Table.Cell>White</Table.Cell>
        <Table.Cell>Laptop PC</Table.Cell>
        <Table.Cell>$1999</Table.Cell>
        <Table.Cell>
          <a href="/tables" className="font-medium text-blue-600 hover:underline">
            Edit
          </a>
        </Table.Cell>
      </Table.Row>
      <Table.Row className="bg-white">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900">Magic Mouse 2</Table.Cell>
        <Table.Cell>Black</Table.Cell>
        <Table.Cell>Accessories</Table.Cell>
        <Table.Cell>$99</Table.Cell>
        <Table.Cell>
          <a href="/tables" className="font-medium text-blue-600 hover:underline">
            Edit
          </a>
        </Table.Cell>
      </Table.Row>
      <Table.Row className="bg-white">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900">Google Pixel Phone</Table.Cell>
        <Table.Cell>Gray</Table.Cell>
        <Table.Cell>Phone</Table.Cell>
        <Table.Cell>$799</Table.Cell>
        <Table.Cell>
          <a href="/tables" className="font-medium text-blue-600 hover:underline">
            Edit
          </a>
        </Table.Cell>
      </Table.Row>
      <Table.Row className="bg-white">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900">Apple Watch 5</Table.Cell>
        <Table.Cell>Red</Table.Cell>
        <Table.Cell>Wearables</Table.Cell>
        <Table.Cell>$999</Table.Cell>
        <Table.Cell>
          <a href="/tables" className="font-medium text-blue-600 hover:underline">
            Edit
          </a>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);
