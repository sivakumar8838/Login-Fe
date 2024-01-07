import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/LoginForm';
import RegisterFrom from './components/Register';
import ResetPassword from './components/ResetPassword';
import Homepage from './components/Homepage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<RegisterFrom />} />
          <Route path='/rese_password' element={<ResetPassword />} />
          <Route path='/home' element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
