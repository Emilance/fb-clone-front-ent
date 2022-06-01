import React from 'react';
import Avatar from '../../Avatar';
import {  BiDotsHorizontalRounded } from 'react-icons/bi'
import './PostHeader.css'


const PostHeader = ({image, time, username}) => {
    return ( 
        <div className='postHeader'>
           <div className='user'>
           <Avatar  image={image} />
               <div className='postDetails'>

               <p className='username'>{username}</p>
               <p> {time}</p>
               </div>
           </div>
           <div className='optionIcon'>
                <BiDotsHorizontalRounded   size='20'/>
           </div>
        </div>
     );
}
 
export default PostHeader;