'use client';

import React, { useState } from 'react';
import {
  Card,
  Avatar,
  Typography,
  Form,
  Input,
  Button,
  message,
  Select,
  DatePicker,
  Row,
  Col,
  Popconfirm,
} from 'antd';
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  CalendarOutlined,
  ToolOutlined,
  TagsOutlined,
} from '@ant-design/icons';
import dayjs from 'dayjs';

const { Title, Text } = Typography;
const { Option } = Select;

export default function ProfilePage() {
  const [form] = Form.useForm();
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    cellphone: '+123456789',
    nationality: 'Canadian',
    address: '123 Maple St, Toronto, ON',
    dob: dayjs('1990-01-01'),
    type: 'freelancer',
    skills: ['React', 'UI/UX'],
  });

  const onFinish = (values: any) => {
    setProfile(values);
    setEditing(false);
    message.success('Profile updated!');
  };

  return (
    <Card
      title="User Profile"
      style={{ maxWidth: 800, margin: '0 auto' }}
      variant='outlined'
      extra={<div style={{ display: 'flex', gap: '8px' }}>
      <Button type="primary" onClick={() => {
        if (editing) {
          form.submit();
        } else {
          form.setFieldsValue(profile);
          setEditing(true);
        }
      }}>
        {editing ? 'Save' : 'Edit'}
      </Button>
  
      <Popconfirm
        title="Are you sure you want to delete your profile?"
        onConfirm={() => {
          console.log('Profile deleted'); // Replace with real delete logic
          message.error('Your profile has been deleted');
        }}
        okText="Yes, delete"
        cancelText="Cancel"
      >
        <Button danger>
          Delete
        </Button>
      </Popconfirm>
    </div>
      }
    >
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <Avatar size={80} icon={<UserOutlined />} />
        <Title level={4} style={{ marginTop: 16 }}>{profile.name}</Title>
        <Text type="secondary">{profile.email}</Text>
      </div>

      <Form
        form={form}
        layout="vertical"
        initialValues={profile}
        onFinish={onFinish}
        disabled={!editing}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Full Name" name="name">
              <Input prefix={<UserOutlined />} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Email" name="email">
              <Input prefix={<MailOutlined />} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Cellphone" name="cellphone">
              <Input prefix={<PhoneOutlined />} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Nationality" name="nationality">
              <Input prefix={<GlobalOutlined />} />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="Address" name="address">
              <Input prefix={<EnvironmentOutlined />} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Date of Birth" name="dob">
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Type of Worker" name="type">
              <Select>
                <Option value="employee">Employee</Option>
                <Option value="freelancer">Freelancer</Option>
                <Option value="contractor">Contractor</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="Skills" name="skills">
              <Select mode="tags" style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
