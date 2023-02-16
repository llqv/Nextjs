import React, { useState } from 'react'
import {
  DesktopOutlined,
  FileOutlined,
  LoginOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import Link from 'next/link';
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dashboard', '1', <Link href={'/admin/Dashboard'}><PieChartOutlined /></Link>),
  getItem('Products', '2', <Link href={'/admin'}><DesktopOutlined /></Link>),
  getItem('Category', '3', <Link href={'/admin/ListCategory'}><TeamOutlined /></Link>),
  getItem('Users', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Register', '4', <Link href={'/admin/Register'}><LoginOutlined /></Link>),
];

const AdminSideBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
    </>
  )
}

export default AdminSideBar