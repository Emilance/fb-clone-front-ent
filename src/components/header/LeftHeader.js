import React from 'react';
import { BsFacebook } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'

import './LeftHeader.css'
import HamBugger from './HamBugger';


const LeftHeader = () => {
    return ( 
        <div className="leftHeader">
            <BsFacebook className='FB_logo' size='50'/>
            <div className='header_Search'>
                <BiSearch className='searchIcon' size='20'/>
                <input type='text' placeholder='search facebook'/>
            </div>
            <HamBugger/>

        </div>
     );
}
 
export default LeftHeader;