import React from 'react'
import Avatar from '../Avatar';
import './SideBarRow.css'


const SideBarRow = ({image, Icon, title}) => {
    return ( 
        <div className='sideBarRow'>
            {image && <Avatar  image={image}/>}
            {Icon  && <Icon className='sideBarIcon' size="25" color='#4267B2'/>}
            <p className='sideBarRowTitle'>{title}</p>
        </div>
     );
}
 
export default SideBarRow;