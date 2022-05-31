import React from 'react';
import { BsHouseFill } from 'react-icons/bs'
import { MdOndemandVideo, MdGroups,MdStoreMallDirectory } from 'react-icons/md'
import { SiFacebookgaming } from 'react-icons/si'
import './MiddleHeader.css'


const MiddleHeader = () => {
    return ( 
        <div className='middleHeader'>
            <div className='MenuIconContainer  active'>
                <BsHouseFill size='25'/>
            </div>
            <div className='MenuIconContainer'>
                <MdOndemandVideo size='25'/>
            </div>
            <div className='MenuIconContainer'>
                <MdStoreMallDirectory size='25'/>
            </div>
            <div className='MenuIconContainer'>
                <MdGroups className='circleIcon' size='25'/>
            </div>
            <div className='MenuIconContainer'>
                <SiFacebookgaming size='25'/>
            </div>
        </div>
     );
}
 
export default MiddleHeader;