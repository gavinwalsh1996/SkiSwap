import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "@fontsource/syne" //Font 
// Pages
import Login from './pages/Login'

const App = () => {

  return (

      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
        </Routes>
      </Router>

  )

}

export default App;
