import { Breadcrumb, Layout, theme } from 'antd';
import React from 'react';
import AdminAddCategory from './admincategories/AdminAddCategory';
import AdminListCategory from './admincategories/AdminListCategory';
import AdminAddProduct from './adminproducts/AdminAddProduct';
const { Header, Content, Footer, Sider } = Layout;
type Props = {}

const AdminCategory: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <>
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Category</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                    <div style={{ padding: 14, float: 'right' }}>
                        <AdminAddCategory />
                    </div>
                    <AdminListCategory />
                </div>
            </Content>
        </>
    )
}

export default AdminCategory