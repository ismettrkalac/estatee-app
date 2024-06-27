import React from 'react';
import { Form, Input, InputNumber, Button, message, Checkbox, Menu } from 'antd';
import { HomeOutlined, PlusOutlined, AppstoreOutlined, SolutionOutlined, FilterOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

const CustomerRequestForm = ({ addRequest, logout }) => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    addRequest(values);
    message.success('Request Sent to Email');
  };

  const handleLogoutClick = () => {
    logout();
    message.success('You have been logged out successfully.');
    navigate('/login');
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '20%', background: '#001529', padding: '20px 0', boxShadow: '2px 0 6px rgba(0,0,0,0.1)', height: '100vh' }}>
        <Menu
          theme="dark"
          mode="vertical"
          style={{ width: '100%' }}
        >
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="addProperty" icon={<PlusOutlined />}>
            <Link to="/add-property">Add Property</Link>
          </Menu.Item>
          <Menu.Item key="viewProperties" icon={<AppstoreOutlined />}>
            <Link to="/properties">View Properties</Link>
          </Menu.Item>
          <Menu.Item key="addRequest" icon={<SolutionOutlined />}>
            <Link to="/customer-request">Add Customer Request</Link>
          </Menu.Item>
          <Menu.Item key="filteredProperties" icon={<FilterOutlined />}>
            <Link to="/filtered-properties">Filtered Properties</Link>
          </Menu.Item>
          <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogoutClick}>
            Logout
          </Menu.Item>
        </Menu>
      </div>
      <div style={{ flex: 1, padding: '40px' }}>
        <div className='form-container'>
          <Form
            name="customer-request-form"
            onFinish={onFinish}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ must_have: false, nice_to_have: false }}
            style={{ maxWidth: '500px', margin: '0 auto' }}
          >
            <h1 style={{ textAlign: 'center', marginBottom: '24px' }}>Add Customer Request</h1>
            <Form.Item
              name="budget"
              label="Budget"
              rules={[{ required: true, message: 'Please input your budget!' }]}
            >
              <InputNumber style={{ width: '100%' }} placeholder='Enter your budget' />
            </Form.Item>
            <Form.Item
              name="location"
              label="Preferred Location"
              rules={[{ required: true, message: 'Please input preferred location!' }]}
            >
              <Input placeholder='Enter preferred location' />
            </Form.Item>
            <Form.Item
              name="bedrooms"
              label="Bedrooms"
              rules={[{ required: true, message: 'Please input the number of bedrooms!' }]}
            >
              <InputNumber style={{ width: '100%' }} placeholder='Enter number of bedrooms' />
            </Form.Item>
            <Form.Item
              name="bathrooms"
              label="Bathrooms"
              rules={[{ required: true, message: 'Please input the number of bathrooms!' }]}
            >
              <InputNumber style={{ width: '100%' }} placeholder='Enter number of bathrooms' />
            </Form.Item>
            <Form.Item
              name="size"
              label="Minimum Size (sqft)"
              rules={[{ required: true, message: 'Please input the minimum size!' }]}
            >
              <InputNumber style={{ width: '100%' }} placeholder='Enter minimum size in sqft' />
            </Form.Item>
            <Form.Item
              name="must_have"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Must Have</Checkbox>
            </Form.Item>
            <Form.Item
              name="nice_to_have"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Nice to Have</Checkbox>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                Submit Request
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CustomerRequestForm;
