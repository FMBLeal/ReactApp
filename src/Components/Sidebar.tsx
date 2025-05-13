'use client';

import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  InfoCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const { Sider } = Layout;

const menuItems = [
  {
    key: '/',
    label: <Link href="/">Home</Link>,
    icon: <HomeOutlined />,
  },
  {
    key: '/about',
    label: <Link href="/about">About</Link>,
    icon: <InfoCircleOutlined />,
  },
  {
    key: '/profile',
    label: <Link href="/profile">Profile</Link>,
    icon: <UserOutlined />,
  },
];

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
      <div
        className="logo"
        style={{ padding: 16, display: 'flex', justifyContent: 'center' }}
      >
        <img
          src="/Netceed.png"
          alt="Inetceed"
          style={{
            width: collapsed ? 40 : 120,
            transition: 'width 0.3s ease',
          }}
        />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[pathname]}
        items={menuItems}
      />
    </Sider>
  );
};

export default Sidebar;
