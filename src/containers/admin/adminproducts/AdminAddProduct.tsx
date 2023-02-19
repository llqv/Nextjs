import { IProduct } from '@/models/Product';
import { addProduct, getProducts } from '@/service/product';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, message, Modal, Select, Upload } from 'antd';
import React, { useEffect, useState } from 'react';
import { SubmitHandler } from "react-hook-form";
import { useMutation, useQuery } from 'react-query';



interface CollectionCreateFormProps {
    open: boolean;
    onCreate: any
    onCancel: () => void;
    onnotification: any
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
    onCreate,
    onnotification,
    onCancel,
}) => {
    const [form] = Form.useForm();
    return (
        <Modal
            open={open}
            title="Create a new Product"
            okText="Create"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        onCreate(values);
                        onnotification()
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
                    rules={[{ required: true, message: 'Please input your Product Name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your Price!' }]}
                >
                    <InputNumber style={{ width: 470 }} />
                </Form.Item>
                <Form.Item
                    label="Quantity"
                    name="quantity"
                    rules={[{ required: true, message: 'Please input your Quantity!' }]}
                >
                    <InputNumber style={{ width: 470 }} />
                </Form.Item>
                <Form.Item name="category" label="Category" rules={[{ required: true, message: 'Please choose your Category!' }]}>
                    <Select
                        placeholder="Select a category"
                        allowClear
                    >
                        <Option value="category 1">Category 1</Option>
                        <Option value="category 2">Category 2</Option>
                        <Option value="category 3">Category 3</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Descriptions"
                    name="description"
                    rules={[{ required: true, message: 'Please input your Descriptions!' }]}
                >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item
                    name="upload"
                    label="Upload"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                >
                    <Upload name="logo" action="/upload.do" listType="picture">
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                </Form.Item>
            </Form>
        </Modal>
    );
};

const AdminAddProduct: React.FC = () => {
    const [open, setOpen] = useState(false);
    const { data: allProduct, refetch: getAllProduct } = useQuery('getProducts', getProducts)
    const { data: extraProduct, mutate: createProduct } = useMutation('addproduct', addProduct)
    const onCreate: SubmitHandler<IProduct> = async (data) => {
        await createProduct(data)
        console.log(data);
    }
    useEffect(() => {
        if (extraProduct) {
            getAllProduct()
        }
    }, [extraProduct])

    return (
        <div>
            <Button
                style={{ backgroundColor: 'green', opacity: 0.9 }}
                type="primary"
                onClick={() => {
                    setOpen(true);
                }}
            >
                New Product
            </Button>
            <CollectionCreateForm
                open={open}
                onCreate={onCreate}
                onCancel={() => {
                    setOpen(false);
                }}
                onnotification={onnotification}

            />
        </div>
    );
};

export default AdminAddProduct;