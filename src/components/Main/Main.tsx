import { Container, Flex, Input, Button } from '@mantine/core';
import TableComponent from '../TableComponent/TableComponent';
import { useState } from 'react';
import AddModal from '../AddModal/AddModal';
import EditModal from '../EditModal/EditModal';

export default function Main() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddClick = () => {
    setIsAddModalOpen(true);
  };

  const handleEdit = (row) => {
    setCurrentRow(row);
    setIsEditModalOpen(true);
  };

  const handleDelete = (id) => {
    setData(data.filter(row => row.id !== id));
  };

  const handleSaveEdit = (name) => {
    setData(data.map(row => {
      if (row.id === currentRow.id) {
        return { ...row, name };
      }
      return row;
    }));
    setIsEditModalOpen(false);
    setCurrentRow(null);
  };

  const handleSaveAdd = (id, name) => {
    setData([...data, { id, name }]);
    setIsAddModalOpen(false);
  };

  const handleCloseModals = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
    setCurrentRow(null);
  };

  return (
    <Container>
      <Flex justify="space-between" align="center" mb="md">
        <Input placeholder="Tìm kiếm" value={searchTerm} onChange={handleSearch} />
        <Button variant="primary" onClick={handleAddClick}>Thêm</Button>
      </Flex>
      <TableComponent data={data} searchTerm={searchTerm} onEdit={handleEdit} onDelete={handleDelete} />
      <AddModal isOpen={false} onClose={handleCloseModals} onSave={handleSaveAdd} />
      <EditModal isOpen={isEditModalOpen} row={currentRow} onClose={handleCloseModals} onSave={handleSaveEdit} />
    </Container>
  );
}