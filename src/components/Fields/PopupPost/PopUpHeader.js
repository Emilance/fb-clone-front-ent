import React from 'react';
import Avatar from '../../Avatar';
import image from '../../images/demo.png'
import './PopUpHeader.css'

const PopUpHeader = ({username}) => {
    return ( 
        <div className='popUpHeader'>
            <h1 > Create post</h1>
            <div className='userDetails'>
              <Avatar  image={image} />
                 <div className='postDetails'>
                      <p className='username'>{username}</p>
                     <p>Friends of friends</p>
               </div>
           </div>
       </div>
     );
}
 
export default PopUpHeader;