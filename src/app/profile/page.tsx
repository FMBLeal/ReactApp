'use client'; // This line is CRUCIAL for any page using useState, form, etc.

import React, { useState } from 'react';
import { Card, Avatar, Typography, Form, Input, Button, message } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export default function ProfilePage() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success('Profile updated!');
      console.log('Updated profile:', values);
    }, 1000);
  };

  return (
    <Card title="Your Profile">
      <div style={{marginBottom: 24 }}>
        <Avatar size={80} icon={<UserOutlined />} />
        <Title level={4} style={{ marginTop: 16 }}>John Doe</Title>
        <Text type="secondary">john.doe@example.com</Text>
      </div>

      <Form
        form={form}
        layout="inline"
        initialValues={{ name: 'John Doe', email: 'john.doe@example.com' }}
        onFinish={onFinish}
      >
        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
          <Input prefix={<UserOutlined />} placeholder="Enter your name" />
        </Form.Item>

        <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
          <Input prefix={<MailOutlined />} placeholder="Enter your email" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
