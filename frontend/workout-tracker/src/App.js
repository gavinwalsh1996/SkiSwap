import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "@fontsource/syne" //Font 
// Pages
import Login from './pages/Login'
import Dashboard from './pages/Dashboard';
import Discover from './pages/Discover'
import ChatRoom from './pages/ChatRoom'
import Messages from './pages/Messages'

const App = () => {

  return (

      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/discover" element={<Discover />} />
          <Route exact path="/chatroom" element={<ChatRoom />} />
          <Route exact path="/messages" element={<Messages />} />
        </Routes>
      </Router>

  )

}

export default App;
