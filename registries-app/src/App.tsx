import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Authorization from './components/Authorization/Authorization';
import Layout from './components/Layout/Layout';
import HomePage from './components/HomePage/HomePage';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='auth' element={<Authorization />} />
          <Route path='profile' element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
