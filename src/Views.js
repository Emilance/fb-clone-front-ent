import { useContext } from 'react';
import {  Routes, Switch, Route}  from 'react-router-dom'
import AuthContext from './AuthContext';
import LoginPage from './components/loginPage/LoginPage';
import Home from './Home';


const Views = () => {
    const {loggedIn }   =useContext(AuthContext)
  
 
    return ( 
        <Routes>
            {loggedIn   &&           
            <Route path="/home" element={<Home/>}/>
            }         
         <Route index element={<LoginPage/>}/>
         <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
     );
}
 
export default Views;