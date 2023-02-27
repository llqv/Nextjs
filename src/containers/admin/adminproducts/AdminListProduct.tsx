// import { getProducts } from '@/service/product';
import { Button, message, Popconfirm, Space, Table } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AdminAddProduct from './AdminAddProduct';
import AdminEditProduct from './AdminEditProduct';

const { Column } = Table;
const text = 'Are you sure to delete this task?';
const description = 'Delete the task';
const confirm = (id: string) => {
    message.info('Delete Successfully.');
};

type Props = {}
interface IData {
    id: number;
    name: string;
    body: string;
    price: number;
    description: string;
    img: string;
    quantity: number;
    category: string
}
const AdminListProduct = (props: Props) => {
    const [data, setData] = useState<IData[]>([]);
    const handleDelete = async (id: number) => {
        await axios.delete(`http://localhost:3100/products/${id}`);
        setData(data.filter((item) => item.id !== id));
    };

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:3100/products');
            setData(result.data);
        };
        fetchData();
    }, []);

    return (
        <>
            <div style={{ padding: 14, float: 'right' }}>
                <AdminAddProduct resetdata={(newProduct: IData) => {
                    setData(state => {
                        const newData = [...state]
                        newData.push(newProduct)
                        return newData
                    })
                }} />
            </div>
            <div>
                <Table dataSource={data?.map((product) => ({
                    key: product.id,
                    name: product.name,
                    img: product.img,
                    price: product.price,
                    quantity: product.quantity,
                    category: product.category,
                    desc: product.description
                })) || []}>
                    <Column title="Name" dataIndex="name" key="name" />
                    <Column title="Image" dataIndex="img" key="img" />
                    <Column title="Price" dataIndex="price" key="price" />
                    <Column title="Quantity" dataIndex="quantity" key="quantity" />
                    <Column title="Category" dataIndex="category" key="category" />
                    <Column title="Desc" dataIndex="desc" key="desc" />
                    <Column
                        title="Action"
                        key="action"
                        render={(product) => {
                            return (
                                <Space size="middle">
                                    <AdminEditProduct product={product} resetdata={(id: number, productupdate: IData) => {
                                        setData(state => {
                                            const newData = [...state].map((product) => {
                                                if (id == product.id) {
                                                    return productupdate
                                                }
                                                return product
                                            })
                                            return newData
                                        })
                                    }} />
                                    <Popconfirm
                                        title={text}
                                        description={description}
                                        onConfirm={() => {
                                            handleDelete(product.key)
                                            confirm(product.key)
                                        }}
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
                            )
                        }}
                    ></Column>
                </Table >
            </div >
        </>
    )
}
export default AdminListProduct