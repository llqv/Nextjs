import AdminProduct from '@/containers/admin/AdminProduct';
import { Layout } from 'antd';
import React from 'react';
import '../../assets/css/styles.scss'
const { Header, Content, Footer, Sider } = Layout;


const ListProducts: React.FC = () => {
    return (
        <>
            <AdminProduct />
        </>
    );
};

export default ListProducts;
