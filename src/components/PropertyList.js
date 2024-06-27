import React from 'react';
import { Table, Menu } from 'antd';
import { HomeOutlined, PlusOutlined, AppstoreOutlined, SolutionOutlined, FilterOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const PropertyList = ({ properties, logout }) => {
  const columns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Location', dataIndex: 'location', key: 'location' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    { title: 'Bedrooms', dataIndex: 'bedrooms', key: 'bedrooms' },
    { title: 'Bathrooms', dataIndex: 'bathrooms', key: 'bathrooms' },
    { title: 'Size (sqft)', dataIndex: 'size', key: 'size' },
  ];

  const handleLogoutClick = () => {
    logout();
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
        <Table dataSource={properties} columns={columns} />
      </div>
    </div>
  );
};

export default PropertyList;
