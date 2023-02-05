import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "@fontsource/syne" //Font 
// Pages
import Login from './pages/Login'
import Dashboard from './pages/Dashboard';

const App = () => {

  return (

      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>

  )

}

export default App;
