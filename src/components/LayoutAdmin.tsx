import AdminFooter from '@/containers/admin/AdminFooter';
import AdminHeader from '@/containers/admin/AdminHeader';
import AdminSideBar from '@/containers/admin/AdminSideBar';
import { Layout } from 'antd';
import { useState } from 'react';
import { QueryClient } from 'react-query';
import { QueryClientProvider } from 'react-query';
import '../assets/css/styles.scss';


export const LayoutAdmin = ({ children }: any) => {
    const [clientquery] = useState(new QueryClient())
    return (
        <QueryClientProvider client={clientquery}>
            <Layout style={{ margin: 0, minHeight: '100vh' }}>
                <AdminSideBar />
                <Layout className="site-layout">
                    <AdminHeader />
                    {children}
                    <AdminFooter />
                </Layout>
            </Layout>
        </QueryClientProvider>
    )
}
