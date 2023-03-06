import { IProduct } from '@/models/Product';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, message, Modal, Select, Upload } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

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
interface CollectionCreateFormProps {
    open: boolean;
    onUpdate: any; 
    onCancel: () => void;
    onnotification: any;
    product: { key: string, name: string, price: number, quantity: number, desc: string, category: string, image: string }
}
const onnotification = () => {
    message.info("Create Product Successfully");
};
const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
const { Option } = Select;
const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
    open,
    onUpdate,
    onCancel,
    onnotification,
    product
}) => {
    console.log(product);

    const [form] = Form.useForm();
    const { control } = useForm<IProduct>()
    return (
        <Modal
            open={open}
            title="Create a new collection"
            okText="Update"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        onUpdate(product.key, values);
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{ modifier: 'public' }}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    initialValue={product.name}
                    rules={[{ required: true, message: 'Please input your Product Name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Price"
                    name="price"
                    initialValue={product.price}
                    rules={[{ required: true, message: 'Please input your Price!' }]}
                >
                    <InputNumber style={{ width: 470 }} />
                </Form.Item>
                <Form.Item
                    label="Quantity"
                    name="quantity"
                    initialValue={product.quantity}
                    rules={[{ required: true, message: 'Please input your Quantity!' }]}
                >
                    <InputNumber style={{ width: 470 }} />
                </Form.Item>
                <Form.Item name="category" label="Category" rules={[{ required: true, message: 'Please choose your Category!' }]}>
                    <Select
                        placeholder="Select a category"
                        defaultValue={product.category}
                     
                    >
                        <Option value="category 1">Category 1</Option>
                        <Option value="category 2">Category 2</Option>
                        <Option value="category 3">Category 3</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Descriptions"
                    name="description"
                    initialValue={product.desc}
                    rules={[{ required: true, message: 'Please input your Descriptions!' }]}
                >
                    <Input.TextArea />
                </Form.Item>
                <Controller name="name" control={control} render={({ field }) =>
                    <Form.Item
                        name="upload"
                        label="Upload"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        initialValue={product.image}
                    >
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                    </Form.Item>} />
            </Form>
        </Modal>
    );
};

const AdminEditProduct = ({ product, resetdata }: { resetdata: any, product: { key: string, name: string, price: number, quantity: number, desc: string, category: string, image: string } }) => {

    // console.log("hahah");
    // console.log(idproduct);
    const [open, setOpen] = useState(false);
    const handleUpdate = async (id: number, updatedData: IData) => {
        const result = await axios.put(`http://localhost:3100/products/${id}`, updatedData);
        resetdata(id, result.data)
        setOpen(false)
    };
    return (
        <div>
            <Button
                style={{ width: 70 }}
                type="primary"
                onClick={() => {
                    setOpen(true);
                }}

            >
                Edit
            </Button>
            <CollectionCreateForm
                open={open}
                onUpdate={handleUpdate}
                onCancel={() => {
                    setOpen(false);
                }}
                onnotification={onnotification}
                product={product}
            />
        </div>
    );
};

export default AdminEditProduct;