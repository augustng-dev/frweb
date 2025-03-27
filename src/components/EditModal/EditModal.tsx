import { Modal, Input, Button, Grid, Fieldset, Stack, TextInput } from '@mantine/core';
import { useState } from 'react';
import '@mantine/dropzone/styles.css';
import { Dropzone } from '@mantine/dropzone';

export default function EditModal({ isOpen, onClose, onSave }) {
  const [id, setID] = useState('');
  const [name, setName] = useState('');

  const handleSave = () => {
    onSave(id, name);
    onClose();
  };

  return (
    <Dropzone.FullScreen
      onDrop={(files) => console.log('accepted files', files)}
      onReject={(files) => console.log('rejected files', files)}
    >
      <Modal opened={isOpen} onClose={onClose} title="Thêm mới người dùng" size="100%">
        {/* <Input label="ID" value={id} onChange={event => setID(event.target.value)} />
        <Input label="Tên" value={name} onChange={event => setName(event.target.value)} mt="md" /> */}
        <Grid>
          <Grid.Col span={8}>
            <Dropzone loading={false} onDrop={() => {}} h={500}>
              Tải ảnh lên
            </Dropzone>
          </Grid.Col>
          <Grid.Col span={4}>
            <Fieldset legend="Thông tin người dùng" h="100%">
              <Stack
                align="center"
                justify="space-between"
                h="100%"
              >
                <TextInput label="Your name" placeholder="Your name" w="100%" />
                <Button variant="primary" onClick={handleSave} mt="md" fullWidth>Lưu</Button>
              </Stack>
            </Fieldset>
          </Grid.Col>
        </Grid>
      </Modal>
    </Dropzone.FullScreen>
  );
}