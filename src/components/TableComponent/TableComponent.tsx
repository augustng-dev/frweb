import { useMemo } from 'react';
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import { Button } from '@mantine/core';

export default function TableComponent({ data, searchTerm, onEdit, onDelete }) {
  const columns = useMemo(() => [
    {
      accessorKey: 'id',
      header: 'ID',
    },
    {
      accessorKey: 'name',
      header: 'Tên',
    },
    {
      id: 'actions',
      header: 'Hành động',
      Cell: ({ row }) => (
        <div>
          <Button variant="subtle" color="blue" onClick={() => onEdit(row.original)}>Sửa</Button>
          <Button variant="subtle" color="red" onClick={() => onDelete(row.original.id)}>Xóa</Button>
        </div>
      ),
    },
  ], [onEdit, onDelete]);

  const table = useMantineReactTable({
    columns,
    data,
    globalFilterFn: searchTerm ? (row) => {
      return (
        row.original.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.original.id.toString().includes(searchTerm)
      );
    } : undefined,
  });

  return <MantineReactTable table={table} />;
}