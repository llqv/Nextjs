import { getProducts, removeProduct } from '@/service/product';
import { Button, message, Popconfirm, Space, Table } from 'antd';
import { useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import AdminEditProduct from './AdminEditProduct';

const { Column } = Table;
const text = 'Are you sure to delete this task?';
const description = 'Delete the task';
const confirm = (id: string) => {
    message.info('Delete Successfully.');
};

type Props = {}

const AdminListProduct = (props: Props) => {
    const { data: allProduct, refetch: getAllProduct } = useQuery('getProducts', getProducts)
    const { data: delProduct, mutate: removeProductmutae } = useMutation('removeProduct', removeProduct)
    console.log(allProduct);
    useEffect(() => {
        if (delProduct) {
            getAllProduct()
        }
    }, [delProduct])
    return (
        <div>
            <Table dataSource={allProduct?.map((product) => ({
                key: product.id,
                name: product.name,
                img: product.img,
                price: product.price,
                quantity: product.quantity,
                category: product.category,
                desc: product.description
            })) || []}>
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Image" render={(product) => <img style={{ width: "150px", height: "100px", objectFit: "cover" }} src={product.img} />} key="img" />
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
                                <AdminEditProduct product={product} />
                                <Popconfirm
                                    title={text}
                                    description={description}
                                    onConfirm={() => {
                                        removeProductmutae(product.key)
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
    )
}
export default AdminListProduct