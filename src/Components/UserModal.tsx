'use client';

import { Modal, Form, Input } from 'antd';
import React, { useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface UserModalProps {
  open: boolean;
  onClose: () => void;
  onSave?: (user: User) => void;
  user: User | null;
  editable?: boolean;
}

const UserModal: React.FC<UserModalProps> = ({ open, onClose, user, editable = false, onSave }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (user) {
      form.setFieldsValue(user);
    }
  }, [user, form]);

  const handleOk = () => {
    if (onSave) {
      form.validateFields().then((values) => {
        onSave({ ...user, ...values });
      });
    }
  };

  return (
    <Modal
      title={editable ? 'Edit User' : 'User Details'}
      open={open}
      onCancel={onClose}
      onOk={editable ? handleOk : onClose}
      okText={editable ? 'Save' : 'Close'}
    >
      <Form form={form} layout="vertical" disabled={!editable}>
        <Form.Item name="name" label="Full Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="role" label="Role">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserModal;
