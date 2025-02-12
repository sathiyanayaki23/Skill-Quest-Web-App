import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Modules/Dashboard/Dashboard';
import Assessment from './components/Modules/Assessment/Assessment';
import Resources from './components/Modules/Resources/Resources';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/assessment" element={<Assessment/>}/>
        <Route path="/resources" element={<Resources/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


