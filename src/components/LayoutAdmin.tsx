import AdminDashboard from '@/containers/admin/AdminDashboard';
import AdminFooter from '@/containers/admin/AdminFooter';
import AdminHeader from '@/containers/admin/AdminHeader';
import AdminSideBar from '@/containers/admin/AdminSideBar';
import { Layout } from 'antd';
import { ReactNode } from 'react';
import '../assets/css/styles.scss';


export const LayoutAdmin = ({ children }: any) => {
    return (
        <Layout style={{ margin: 0, minHeight: '100vh' }}>
            <AdminSideBar />
            <Layout className="site-layout">
                <AdminHeader />
                {children}
                <AdminFooter />
            </Layout>
        </Layout>
    )
}
