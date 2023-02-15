import { Breadcrumb, Layout, theme } from 'antd';
import React from 'react';
import AdminAddProduct from './adminproducts/AdminAddProduct';
import AdminListProduct from './adminproducts/AdminListProduct';
const { Header, Content, Footer, Sider } = Layout;
type Props = {}

const AdminProduct: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Product</Breadcrumb.Item>
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

export default AdminProduct