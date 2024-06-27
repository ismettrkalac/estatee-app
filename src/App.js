import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import LogoutButton from './components/LogoutButton';
import HomePage from './components/HomePage';
import AddPropertyForm from './components/AddPropertyForm';
import PropertyList from './components/PropertyList';
import CustomerRequestForm from './components/CustomerRequestForm';
import FilteredPropertyList from './components/FilteredPropertyList';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [properties, setProperties] = useState([]);
  const [requests, setRequests] = useState([]);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  const addProperty = (property) => setProperties([...properties, property]);
  const addRequest = (request) => setRequests([...requests, request]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm login={login} />} />
        <Route path="/logout" element={<LogoutButton logout={logout} />} />
        <Route path="/add-property" element={isAuthenticated ? <AddPropertyForm addProperty={addProperty} /> : <Navigate to="/login" />} />
        <Route path="/properties" element={isAuthenticated ? <PropertyList properties={properties} /> : <Navigate to="/login" />} />
        <Route path="/customer-request" element={isAuthenticated ? <CustomerRequestForm addRequest={addRequest} /> : <Navigate to="/login" />} />
        <Route path="/filtered-properties" element={isAuthenticated ? <FilteredPropertyList properties={properties} requests={requests} /> : <Navigate to="/login" />} />
        <Route path="/" element={<HomePage logout={logout} />} />
      </Routes>
    </Router>
  );
}

export default App;
