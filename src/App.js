import React, {useState} from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter  as Router, Routes, Switch, Route}  from 'react-router-dom'
import LoginPage from './components/loginPage/LoginPage';
import Views from './Views';
import axios from 'axios';
import { AuthContextProvider } from './AuthContext';

axios.defaults.withCredentials = true;


function App() {
 
    
  return (
    
    <Router>
        <div className="App">
        <AuthContextProvider>
        <Views/>
    </AuthContextProvider>
      </div>
      </Router>
      

      
      
  );
}

export default App;
