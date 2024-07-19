import React from 'react';
import { Button, Form, Input, TimePicker, message } from 'antd';
import axios from 'axios';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
};

const CandidateInfo = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      await axios.post('http://localhost:3001/api/candidates', values.user);
      form.resetFields();
      message.success('Form submitted successfully!');
    } catch (error) {
      message.error('Failed to submit the form!');
    }
  };

  return (
    <div className='mx-auto w-1/2'>
      <Form
        className='mx-auto'
        {...layout}
        form={form}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        layout='vertical'
      >
        <Form.Item
          name={['user', 'firstName']}
          label="First name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={['user', 'lastName']}
          label="Last name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={['user', 'phoneNumber']}
          label="Phone number"
        >
          <Input />
        </Form.Item>


        <Form.Item
          name={['user', 'email']}
          label="Email"
          rules={[
            {
              type: 'email',
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={['user', 'timeInterval']}
          label="Time Interval when it's better to call"
        >
          <TimePicker.RangePicker format='HH:mm' />
        </Form.Item>

        <Form.Item name={['user', 'linkedInURL']} label="LinkedIn profile URL">
          <Input />
        </Form.Item>

        <Form.Item name={['user', 'GitHubURL']} label="GitHub profile URL">
          <Input />
        </Form.Item>


        <Form.Item
          name={['user', 'comment']}
          label="Free text Comment"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 8,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default CandidateInfo;
