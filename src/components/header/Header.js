import React from 'react';
import LeftHeader from './LeftHeader';
import RightHeader from './RightHeader';
import image from '../images/demo.png'
import MiddleHeader from './MiddleHeader';
import './Header.css'
import SideBarRow from '../sidebar/SideBarRow';
import { FiMenu } from 'react-icons/fi'



const Header = () => {
    return ( 
        <div className='header'>
            <LeftHeader/>
            
            <MiddleHeader/>
            <RightHeader  
             first_name='Daniel'
             image={image}
            />
        </div>
     );
}
 
export default Header;
<div className='header'></div>