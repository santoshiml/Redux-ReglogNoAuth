import React from 'react';

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import App from '../App' ;
  import Register from '../components/Register';
  import Login from '../components/Login';
  import Dashboard from '../components/Dashboard';

export default function routes() {
  return (
    <div>
        <BrowserRouter> 
        <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
        
        </BrowserRouter>

    </div>
  )
}
