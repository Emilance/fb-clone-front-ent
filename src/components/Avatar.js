import React from 'react';
import './Avatar.css'


const Avatar = ({image}) => {
    return ( 
        <>
          <img src={image} alt='me'/>
        </>
     );
}
 
export default Avatar;