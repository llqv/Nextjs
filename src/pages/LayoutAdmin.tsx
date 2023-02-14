import React from 'react';
import { Layout } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import AdminContent from '@/components/admin/AdminContent';
import AdminFooter from '@/components/admin/AdminFooter';
import AdminHeader from '@/components/admin/AdminHeader';
import AdminSideBar from '@/components/admin/AdminSideBar';
import '../assets/css/styles.scss'
import AdminListProduct from '@/components/admin/adminproducts/AdminListProduct';


const LayoutAdmin: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AdminSideBar />
      <Layout className="site-layout">
        <AdminHeader />
        {/* <AdminListProduct /> */}
        <AdminContent />
        <AdminFooter />
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;