import React from 'react'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import AdminListProduct from './adminproducts/AdminListProduct';
import AdminAddProduct from './adminproducts/AdminAddProduct';
const { Header, Content, Footer, Sider } = Layout;
type Props = {}

const AdminContent: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
          <div style={{ padding: 14, float: 'right' }}>
            <AdminAddProduct />
          </div>
          <AdminListProduct />
        </div>
      </Content>
    </>
  )
}

export default AdminContent