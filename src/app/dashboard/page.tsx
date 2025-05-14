'use client';

import React from 'react';
import { Card, Row, Col } from 'antd';
import { Line, Pie, Bar } from '@ant-design/charts';

const DashboardPage: React.FC = () => {
  // Sample data for charts
  const lineData = [
    { month: 'Jan', value: 30 },
    { month: 'Feb', value: 40 },
    { month: 'Mar', value: 35 },
    { month: 'Apr', value: 50 },
    { month: 'May', value: 49 },
    { month: 'Jun', value: 60 },
  ];

  const pieData = [
    { type: 'Category A', value: 27 },
    { type: 'Category B', value: 25 },
    { type: 'Category C', value: 18 },
    { type: 'Category D', value: 15 },
    { type: 'Others', value: 15 },
  ];

  const barData = [
    { year: '2016', sales: 38 },
    { year: '2017', sales: 52 },
    { year: '2018', sales: 61 },
    { year: '2019', sales: 145 },
    { year: '2020', sales: 48 },
  ];

  // Chart configurations
  const lineConfig = {
    data: lineData,
    xField: 'month',
    yField: 'value',
    smooth: true,
  };

  const pieConfig = {
    data: pieData,
    angleField: 'value',
    colorField: 'type',
    interactions: [{ type: 'element-active' }],
    
  };

  const barConfig = {
    data: barData,
    xField: 'year',
    yField: 'sales',
  };

  return (
    <div style={{ padding: 24 }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={14}>
          <Card title="Monthly Trends">
            <Line {...lineConfig} />
          </Card>
        </Col>
        <Col xs={24} lg={10}>
          <Card title="Category Distribution">
            <Pie {...pieConfig} />
          </Card>
        </Col>
        <Col xs={24}>
          <Card title="Annual Sales">
            <Bar {...barConfig} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardPage;
