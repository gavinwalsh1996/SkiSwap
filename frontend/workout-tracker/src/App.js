import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/pages/Login';
import Profile from '../src/pages/Profile'

const App = () => (
  <Router>



    {/* Routes */}
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
    </Routes>
  </Router>
);

export default App;
