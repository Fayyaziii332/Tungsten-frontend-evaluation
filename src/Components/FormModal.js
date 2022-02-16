import React from 'react';
import {
  Form,
  Input,
  Select,
  Modal,
  message,
} from 'antd';
import { v4 as uuidv4 } from 'uuid';

const { Option } = Select;

const FormModal = ({ users, isVisible, setVisible, addUser }) => {
  const [form] = Form.useForm();

  const handleAdd = () => {
    form.validateFields().then(values => {
      const newUser = {
        key: uuidv4(),
        ...values,
      };

      setVisible(false);
      addUser([...users, newUser]);
      form.resetFields();
      message.success({ content: 'User has been added successfully!', duration: 2 });
    });
  };

  return (
    <Modal
      title="User Form"
      visible={isVisible}
      onOk={handleAdd}
      onCancel={() => setVisible(false)}
      okText="Add User"
    >
      <Form
        form={form}
        scrollToFirstError
      >
        <Form.Item
          name="firstName"
          label="First Name"
          tooltip="Enter your first name"
          rules={[
            {
              required: true,
              whitespace: true,
              pattern: new RegExp(/^[a-zA-Z ]{3,20}$/),
              message: 'Please enter valid name',
            },
          ]}
        >
          <Input placeholder="First name" />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name"
          tooltip="Enter your last name"
          rules={[
            {
              required: true,
              pattern: new RegExp(/^[a-zA-Z ]{3,20}$/),
              message: 'Please enter valid name',
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="Last name" />
        </Form.Item>
        <Form.Item
          name="type"
          label="User Type"
          rules={[
            {
              required: true,
              message: 'Please select a user type',
            },
          ]}
        >
          <Select placeholder="select user type">
            <Option value="admin">Admin</Option>
            <Option value="worker">Worker</Option>
            <Option value="manager">Manager</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="number"
          label="Phone Number"
          tooltip={{ title: "Enter your phone number" }}
          rules={[
            {
              required: true,
              pattern: new RegExp(/^(?:\d{4}-\d{7}|\d{11})$/),
              message: 'Please enter valid phone number!',
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="Eg 03xx xxxxxxx" />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[
            {
              required: true,
              message: 'Please input your address',
            },
          ]}
        >
          <Input.TextArea placeholder="Please enter your address" showCount maxLength={100} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default FormModal;
