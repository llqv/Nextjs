import { Button, Form, Input, Modal, Select } from 'antd';
import React, { useState } from 'react';

interface Values {
    title: string;
    description: string;
    modifier: string;
}

interface CollectionCreateFormProps {
    open: boolean;
    onCreate: (values: Values) => void;
    onCancel: () => void;
}
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
                    label="Category Name"
                    name="categoryname"
                    rules={[{ required: true, message: 'Please input your Category Name!' }]}
                >
                    <Input />
                </Form.Item>
                {/* <Form.Item
                    label="Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your Price!' }]}
                >
                    <InputNumber style={{ width: 470 }} />
                </Form.Item>
                <Form.Item name="category" label="Category" rules={[{ required: true }]}>
                    <Select
                        placeholder="Select a category"
                        allowClear
                    >
                        <Option value="male">Category 1</Option>
                        <Option value="female">Category 2</Option>
                        <Option value="other">Category 3</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Descriptions"
                    name="deescription"
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
                </Form.Item> */}
            </Form>
        </Modal>
    );
};

const AdminAddCategory: React.FC = () => {
    const [open, setOpen] = useState(false);

    const onCreate = (values: any) => {
        console.log('Received values of form: ', values);
        setOpen(false);
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
                New Category
            </Button>
            <CollectionCreateForm
                open={open}
                onCreate={onCreate}
                onCancel={() => {
                    setOpen(false);
                }}
            />
        </div>
    );
};

export default AdminAddCategory;