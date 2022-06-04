import React from 'react';
import { MdVideoCameraFront } from 'react-icons/md'
import { FaPhotoVideo }  from 'react-icons/fa'
import { BsEmojiLaughing } from 'react-icons/bs'
import {  BiDotsHorizontalRounded } from 'react-icons/bi'
import './PopUpFooter.css'




const PopUpFooter = () => {
    return ( 
        <div className='popUpFooter'>
            <div className='postIconContainer'>
                <span>Add to your post </span>
                <div className='optionIcon'>
                <MdVideoCameraFront color='rgb(231, 73, 73)' size='30'/>
                   </div>
                <div className='optionIcon'>       
                <FaPhotoVideo color='rgba(8, 150, 8, 0.884)' size='25'/>
                   </div>
                <div className='optionIcon'>
                <BsEmojiLaughing color='rgb(175, 241, 21)'  size='22'/>
                   </div>
                <div className='optionIcon'>
                <BiDotsHorizontalRounded   size='20'/>
                   </div>

            </div>
            <button  className='postSubmit'>Post</button>
        </div>
     );
}
 
export default PopUpFooter;