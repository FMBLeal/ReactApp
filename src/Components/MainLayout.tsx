'use client';

import React from 'react';
import { Layout } from 'antd';
import Sidebar from '@Components/Sidebar';

const { Content, Header, Footer } = Layout;

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Header style={{ display: 'flex', alignItems: 'center', backgroundColor:'#9cfd00'}}/>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff' }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>© 2025 MyApp</Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;