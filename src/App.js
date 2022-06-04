import React, {useState} from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter  as Router, Routes, Switch, Route}  from 'react-router-dom'
import LoginPage from './components/loginPage/LoginPage';
import Views from './Views';

function App() {
 
    
  return (
    <Router>
      <div className="App">
      <Views/>
    </div>
    </Router>
    
      
      
  );
}

export default App;
