import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const LogoutButton = ({ logout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Button type="primary" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
