import React from 'react';
import Avatar from '../../Avatar';
import { MdVideoCameraFront } from 'react-icons/md'
import { FaPhotoVideo }  from 'react-icons/fa'
import { BsEmojiLaughing } from 'react-icons/bs'
import image from '../../images/demo.png'
import './PostField.css'


const PostField = () => {
    return ( 
        <div className='postField'>
              <div className='upperPostField'>
                      <div className='avatarContainer'>
                        <Avatar size='30' image={image}  />
                      </div>
                     <input type='text' placeholder='Whats on your mind' />
              </div>
              <div className='lowerPostField'>
                  <div className='insertField'>
                       <MdVideoCameraFront color='rgb(231, 73, 73)' size='30'/>
                       <p>Live video</p>
                  </div>
                  <div className='insertField'>
                       <FaPhotoVideo color='rgba(8, 150, 8, 0.884)' size='25'/>
                       <p>Photo/video</p>
                  </div>
                  <div className='insertField'>
                       <BsEmojiLaughing color='rgb(175, 241, 21)'  size='22'/>
                       <p>Feeling/activity</p>
                  </div>
              </div>

        </div>
     );
}
 
export default PostField;