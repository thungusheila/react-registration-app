// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Registration from './pages/Registration';
import RegisterList from './pages/RegisterList';
import LandingPage from './pages/LandingPage';
import { Box } from '@mui/material';

const App = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
           < Route path='/'element={<LandingPage/>}/>
            <Route path="/register" element={<Registration />} />
            <Route path="/register-list" element={<RegisterList />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
