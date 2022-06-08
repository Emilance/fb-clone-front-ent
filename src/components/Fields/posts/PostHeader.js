import React, { useState } from 'react';
import Avatar from '../../Avatar';
import {  BiDotsHorizontalRounded } from 'react-icons/bi'
import './PostHeader.css'
import axios from 'axios';


const PostHeader = ({image, timeStamp, username, post}) => {
     const [openOption, setOpenOption]= useState(false)
   const toggleOption= () =>{
       setOpenOption(!openOption);
   }
   const deletePost= (id)=>{
       axios.delete(`http://localhost:4000/posts/${id}`).then(()=>{
           window.location.reload(false);
       })
       
   }

    return ( 
        <div className='postHeader'>
           <div className='user'>
           <Avatar  image={image} />
               <div className='postDetails'>

               <p className='username'>{username}</p>
               <p> {new Date(parseInt(timeStamp)).toUTCString()}</p>
               </div>
           </div>
           <div onClick={toggleOption} className='optionIcon'>
                <BiDotsHorizontalRounded   size='20'/>
           </div>
           {openOption  &&
           <div className='postOption'>
               <p  onClick={()=> deletePost(post._id)}>Delete Post</p>
           </div>
         }
        </div>
     );
}
 
export default PostHeader;