import React, { useState } from 'react';
import { List, Card, Button, InputNumber, Select, Menu, Input } from 'antd';
import { HomeOutlined, PlusOutlined, AppstoreOutlined, SolutionOutlined, FilterOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Option } = Select;

const propertyData = [
  { id: 1, title: 'Ev 1', price: 200000, rooms: 3 },
  { id: 2, title: 'Ev 2', price: 350000, rooms: 4 },
  { id: 3, title: 'Ev 3', price: 150000, rooms: 2 },
  { id: 4, title: 'Ev 4', price: 280000, rooms: 3 },
  { id: 5, title: 'Ev 5', price: 400000, rooms: 5 },
];

const FilteredPropertyList = ({ logout }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [minRooms, setMinRooms] = useState(1);
  const [searchTitle, setSearchTitle] = useState('');
  const [filteredProperties, setFilteredProperties] = useState(propertyData);

  const handleFilter = () => {
    const filtered = propertyData.filter(item => 
      item.price >= minPrice &&
      item.price <= maxPrice &&
      item.rooms >= minRooms &&
      item.title.toLowerCase().includes(searchTitle.toLowerCase())
    );
    setFilteredProperties(filtered);
  };

  const handleSort = (value) => {
    let sortedProperties = [...filteredProperties];
    if (value === 'asc') {
      sortedProperties.sort((a, b) => a.price - b.price);
    } else if (value === 'desc') {
      sortedProperties.sort((a, b) => b.price - a.price);
    }
    setFilteredProperties(sortedProperties);
  };

  const handleLogoutClick = () => {
    logout();
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '20%', background: '#001529', padding: '20px 0', boxShadow: '2px 0 6px rgba(0,0,0,0.1)', height: '100vh', position: 'fixed', top: 0, bottom: 0, left: 0 }}>
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
      <div style={{ flex: 1, padding: '40px', marginLeft: '20%' }}>
        <h1 style={{ color: '#001529' }}>Emlak Listesi</h1>
        <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: '16px' }}>
          <InputNumber
            defaultValue={0}
            min={0}
            max={1000000}
            step={10000}
            onChange={value => setMinPrice(value)}
            style={{ marginRight: 16 }}
          />
          <InputNumber
            defaultValue={1000000}
            min={0}
            max={1000000}
            step={10000}
            onChange={value => setMaxPrice(value)}
            style={{ marginRight: 16 }}
          />
          <InputNumber
            defaultValue={1}
            min={1}
            max={10}
            onChange={value => setMinRooms(value)}
            style={{ marginRight: 16 }}
          />
          <Input
            placeholder="Ev ismi ara"
            allowClear
            onChange={e => setSearchTitle(e.target.value)}
            style={{ width: 200, marginRight: 16 }}
          />
          <Select defaultValue="asc" style={{ width: 120 }} onChange={handleSort}>
            <Option value="asc">Price Asc</Option>
            <Option value="desc">Price Desc</Option>
          </Select>
          <Button type="primary" onClick={handleFilter}>
            Filtrele
          </Button>
        </div>
        <List
          grid={{ gutter: 16, column: 3 }}
          dataSource={filteredProperties}
          renderItem={item => (
            <List.Item>
              <Card 
                title={item.title}
                hoverable
                style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                cover={
                  <img 
                    alt={item.title}
                    src={`https://via.placeholder.com/300?text=${item.title}`}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                }
              >
                <p style={{ marginBottom: 8 }}>
                  Fiyat: {item.price.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}
                </p>
                <p style={{ marginBottom: 0 }}>Oda Sayısı: {item.rooms}</p>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default FilteredPropertyList;
