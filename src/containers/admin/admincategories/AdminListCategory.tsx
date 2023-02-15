import { Button, message, Popconfirm, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import AdminEditCategory from './AdminEditCategory';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;

}
const text = 'Are you sure to delete this task?';
const description = 'Delete the task';
const confirm = () => {
    message.info('Delete Successfully.');
};
const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <AdminEditCategory />
                <Popconfirm
                    title={text}
                    description={description}
                    onConfirm={confirm}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button
                        type="primary" danger
                    >
                        Delete
                    </Button>
                </Popconfirm>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        name: 'Category 1',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Category 2',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Category 3',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Category 4',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
    },
    {
        key: '5',
        name: 'Category 5',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
    },
];

const AdminListCategory: React.FC = () => <Table columns={columns} dataSource={data} />;

export default AdminListCategory;