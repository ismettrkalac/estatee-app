import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginForm.css';

const LoginForm = ({ login }) => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const { username, password } = values;
    const apiUrl = 'https://v1.nocodeapi.com/izmirvucaj1/google_sheets/ueAYEzLCojzLJKRi?tabId=Sheet1';

    try {
      const response = await axios.get(apiUrl);
      const allData = response.data.data;
      const user = allData.find(user => user.username === username && user.password === password);

      if (user) {
        message.success('Login Successful');
        login();
        navigate('/');
      } else {
        message.error('Invalid username or password');
      }
    } catch (error) {
      console.error('Failed to fetch data', error);
      message.error('Veriler alınamadı. Lütfen daha sonra tekrar deneyin.');
    }
  };

  return (
    <div className="login-container">
      <div className="form-wrapper">
        <Form
          name="login-form"
          onFinish={handleSubmit}
          className="login-form"
        >
          <h1 className="login-title">Login</h1>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;