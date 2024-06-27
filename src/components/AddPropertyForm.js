import React, { useState } from 'react';
import { Form, Input, InputNumber, Button, message, Menu, Upload, Modal } from 'antd';
import { HomeOutlined, PlusOutlined, AppstoreOutlined, SolutionOutlined, FilterOutlined, LogoutOutlined, UploadOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

const { Dragger } = Upload;

const AddPropertyForm = ({ addProperty, logout }) => {
  const navigate = useNavigate();
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([]);

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
  };

  const handleCancel = () => setPreviewVisible(false);

  const handleChange = ({ fileList }) => setFileList(fileList);

  const getBase64 = file =>
    new Promise(resolve => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
    });

  const onFinish = values => {
    addProperty({ ...values, imageUrl: fileList.length > 0 ? fileList[0].thumbUrl || fileList[0].url : undefined });
    message.success('Property added successfully');
    setFileList([]);
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
            name="add-property-form"
            onFinish={onFinish}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: '500px', margin: '0 auto' }}
          >
            <h1 style={{ textAlign: 'center', marginBottom: '24px' }}>Add New Property</h1>
            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true, message: 'Please input the property title!' }]}
            >
              <Input placeholder='Enter property title' />
            </Form.Item>
            <Form.Item
              name="location"
              label="Location"
              rules={[{ required: true, message: 'Please input the property location!' }]}
            >
              <Input placeholder='Enter property location' />
            </Form.Item>
            <Form.Item
              name="price"
              label="Price"
              rules={[{ required: true, message: 'Please input the property price!' }]}
            >
              <InputNumber
                style={{ width: '100%' }}
                placeholder='Enter property price'
                formatter={value => `₺ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={value => value.replace(/\₺\s?|(,*)/g, '')}
              />
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
              label="Size (sqft)"
              rules={[{ required: true, message: 'Please input the property size!' }]}
            >
              <InputNumber style={{ width: '100%' }} placeholder='Enter property size in sqft' />
            </Form.Item>
            <Form.Item
              name="imageUrl"
              label="Property Image"
            >
              <Dragger
                accept=".jpg,.jpeg,.png"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                beforeUpload={() => false}
              >
                {fileList.length === 0 && (
                  <>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </>
                )}
              </Dragger>
              <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
                <img alt="Preview" style={{ width: '100%' }} src={previewImage} />
              </Modal>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                Add Property
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddPropertyForm;
