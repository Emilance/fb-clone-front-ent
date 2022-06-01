import React from 'react';
import Avatar from '../../Avatar';
import image from '../../images/bg.png'
import './Stories.css'

const Stories = ({image, ProfileName}) => {
    return ( 
        <div className='stories'   >
            <div  className='storyBorder'>

           <Avatar  image={image}/>
            </div>
           <p>{ProfileName}</p>
        </div>
     );
}
 
export default Stories;