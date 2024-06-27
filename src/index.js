import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // global stil dosyasını içe aktarabilirsiniz
import App from './App'; // ana uygulama bileşenini içe aktarın
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Ek raporlama veya diğer işlemler için gerekirse
reportWebVitals();
