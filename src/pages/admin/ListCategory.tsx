import AdminCategory from '@/containers/admin/AdminCategory';
import AdminProduct from '@/containers/admin/AdminProduct';
import { Layout } from 'antd';
import React from 'react';
import '../../assets/css/styles.scss'
const { Header, Content, Footer, Sider } = Layout;


const ListCategory: React.FC = () => {
    return (
        <>
            <AdminCategory />
        </>
    );
};

export default ListCategory;