import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "@fontsource/syne" //Font 
// Pages
import Login from './pages/Login'
import Dashboard from './pages/Dashboard';
import Discover from './pages/Discover'

const App = () => {

  return (

      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/discover" element={<Discover />} />
        </Routes>
      </Router>

  )

}

export default App;
