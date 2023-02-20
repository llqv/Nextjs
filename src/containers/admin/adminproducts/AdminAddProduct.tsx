import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, message, Modal, Select, Upload } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';


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

const AdminAddProduct = ({ resetdata }: { resetdata: any }) => {
    const [open, setOpen] = useState(false);
    const handleCreate = async (newData: IData) => {
        const result = await axios.post('http://localhost:3100/products', newData);
        resetdata(result.data)
        setOpen(false)
    };

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
                onCreate={handleCreate}
                onCancel={() => {
                    setOpen(false);
                }}
                onnotification={onnotification}

            />
        </div>
    );
};

export default AdminAddProduct;