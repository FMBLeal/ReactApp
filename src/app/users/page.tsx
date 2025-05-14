'use client';

import { Table, Button, Space, message, Popconfirm } from 'antd';
import React, { useState } from 'react';
import UserModal from '@/Components/UserModal';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const initialUsers: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
];

export default function UserListPage() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [editable, setEditable] = useState(false);

  const openModal = (user: User, canEdit: boolean) => {
    setSelectedUser(user);
    setEditable(canEdit);
    setModalOpen(true);
  };

  const handleDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
    message.success('User removed');
  };

  const handleSave = (updatedUser: User) => {
    setUsers(users.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
    setModalOpen(false);
    message.success('User updated');
  };

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Role', dataIndex: 'role', key: 'role' },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, user: User) => (
        <Space>
          <Button onClick={() => openModal(user, false)}>Read</Button>
          <Button type="primary" onClick={() => openModal(user, true)}>Edit</Button>
          <Popconfirm
            title="Confirm delete?"
            onConfirm={() => handleDelete(user.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Remove</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table rowKey="id" columns={columns} dataSource={users} />
      <UserModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        user={selectedUser}
        editable={editable}
        onSave={editable ? handleSave : undefined}
      />
    </>
  );
}
