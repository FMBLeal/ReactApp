'use client';

import React from 'react';
import { Layout, Dropdown, Menu, Avatar, Typography } from 'antd';
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import Sidebar from '../Components/Sidebar';
import { Color } from 'antd/es/color-picker';

const { Content, Header, Footer } = Layout;
const { Text } = Typography;

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const logout = () => {
    // Your logout logic here (e.g., clear token, redirect, etc.)
    console.log('User logged out');
  };

  const profileMenu = (
    <Menu>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        <Link href="/profile">My Profile</Link>
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        <Link href="/settings">Settings</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={logout}>
        Log Out
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ marginLeft: 200  }}>
      <Sidebar />
      <Layout>
        <Header
          style={{
            background: '#a2fc08',
            padding: '0 24px',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <Dropdown overlay={profileMenu} trigger={['click']}>
            <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <Avatar style={{color: '003c52'}} icon={<UserOutlined />} />
              <Text style={{ marginLeft: 8, color:'003c52'}}>John Doe</Text>
            </div>
          </Dropdown>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff' }}>{children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>© 2025 MyApp</Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
