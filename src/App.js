import React from 'react';
import Navbar from './components/Navbar/Navbar.js'
import './App.css';
import Layout from './components/MainPage/Layout.js';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoginPage from 'components/LoginPage/Loginpage.js';
import FullPage from 'components/Fullpage/FullPage.js';

function App() {
  return (
    <div className="App">
    {
      localStorage.getItem('user')==undefined ?<LoginPage/> : <FullPage/>
    }
    </div>
  );
}

export default App;
