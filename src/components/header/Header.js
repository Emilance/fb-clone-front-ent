import React, { useContext } from 'react';
import LeftHeader from './LeftHeader';
import RightHeader from './RightHeader';
import image from '../images/demo.png'
import MiddleHeader from './MiddleHeader';
import './Header.css'
import { userContext } from '../../AuthContext';



const Header = () => {
    const user = useContext(userContext);

    return ( 
        <div className='header'>
            <LeftHeader/>
            
            <MiddleHeader/>
            <RightHeader  
             first_name={user.firstName}
             image={image}
            />
        </div>
     );
}
 
export default Header;
<div className='header'></div>