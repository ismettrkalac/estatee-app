import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, message } from 'antd';
import { HomeOutlined, PlusOutlined, AppstoreOutlined, SolutionOutlined, FilterOutlined, LogoutOutlined } from '@ant-design/icons';

const HomePage = ({ logout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    logout();
    message.success('You have been logged out successfully.'); // Başarılı logout mesajı
    navigate('/login'); // Logout işlemi sonrası /login sayfasına yönlendirme
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <div style={{ width: '20%', background: '#001529', padding: '20px 0', boxShadow: '2px 0 6px rgba(0,0,0,0.1)', position: 'fixed', left: 0, top: 0, bottom: 0 }}>
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
            Log Out
          </Menu.Item>
        </Menu>
      </div>
      <div style={{ marginLeft: '20%', padding: '40px', flex: 1, display: 'flex', flexDirection: 'column', backgroundImage: 'url("/assets/1_nyU2IcNL3TVxZ_GPkkmt2g.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <h1 style={{ color: '#001529', marginRight: '20px' }}>Welcome to the Real Estate Management System</h1>
          <img src="/assets/real-estate-image.jpg" alt="Real Estate Logo" style={{ width: '80px' }} />
        </div>
        {/* İçerik buraya gelecek */}
      </div>
    </div>
  );
};

export default HomePage;
