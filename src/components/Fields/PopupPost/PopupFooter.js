import React, { useContext } from 'react';
import { MdVideoCameraFront,MdArrowBack } from 'react-icons/md'
import { FaPhotoVideo }  from 'react-icons/fa'
import { BsEmojiLaughing } from 'react-icons/bs'
import {  BiDotsHorizontalRounded } from 'react-icons/bi'
import './PopUpFooter.css'
import { PostContext, OpenPostContext } from '../../../Home';





const PopUpFooter = () => {
  const createPost = useContext(PostContext)
  const openCreatePost = useContext(OpenPostContext)

  const OpenCreatePost = ()=> {
       openCreatePost(!createPost);
  }
    return ( 
        <div className='popUpFooter'>
            <div className='postIconContainer'>
                <span>Add to your post </span>
                <div className='optionIcon'>
                <MdVideoCameraFront color='rgb(231, 73, 73)' size='30'/>
                   </div>
                <div   className='optionIcon'>       
                <FaPhotoVideo  color='rgba(8, 150, 8, 0.884)' size='25'/>
                   </div>
                <div className='optionIcon'>
                <BsEmojiLaughing color='rgb(175, 241, 21)'  size='22'/>
                   </div>
                <div className='optionIcon'>
                <BiDotsHorizontalRounded   size='20'/>
                   </div>
                   <div   onClick={OpenCreatePost}  className='optionIcon absolute'>
                <MdArrowBack   size='20'/>
                   </div>

            </div>
            <button onClick={OpenCreatePost} className='postSubmit'>Post</button>
        </div>
     );
}
 
export default PopUpFooter;