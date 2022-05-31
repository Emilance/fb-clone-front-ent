import React from 'react';
import LeftHeader from './LeftHeader';
import RightHeader from './RightHeader';
import image from '../images/demo.png'
import MiddleHeader from './MiddleHeader';
import './Header.css'



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