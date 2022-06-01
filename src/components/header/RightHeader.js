import React from 'react';
import { CgMenuGridR } from 'react-icons/cg'
import { BsMessenger } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'
import { MdNotifications, MdArrowDropDown } from 'react-icons/md'
import './RightHeader.css'
import Avatar from '../Avatar';


const RightHeader = ({ first_name, image}) => {
    return ( 
        <div className="rightHeader">
          <div  className='userProfile'>
             <Avatar image={image}/>
              <p>{first_name}...</p>
          </div>
          <div className='widgetIcon'>
        
          <div className='widgetLogoContainer  plus'>
                <AiOutlinePlus  size='23'/>
          </div>
              <div className='widgetLogoContainer  menugrid'>
              <CgMenuGridR  size='18'/>
              </div>
              <div className='widgetLogoContainer'>
                  
              <BsMessenger  size='18'/>
                  </div>
              <div className='widgetLogoContainer'>
                  
              <MdNotifications  size='18'/>
                  </div>
              <div className='widgetLogoContainer'>
                  
              <MdArrowDropDown  size='18'/>
                  </div>

          </div>

        </div>
     );
}
 
export default RightHeader;