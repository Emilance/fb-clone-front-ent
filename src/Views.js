import {  Routes, Switch, Route}  from 'react-router-dom'
import LoginPage from './components/loginPage/LoginPage';
import Home from './Home';


const Views = () => {
    return ( 
        <Routes>
     <Route index element={<LoginPage/>}/>
     <Route path="/home" element={<Home/>}/>
     <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
     );
}
 
export default Views;