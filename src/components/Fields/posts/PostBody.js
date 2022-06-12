
import React from 'react';
import './PostBody.css'

const PostBody = ({PostText, PostPicture}) => {
    return ( 
        <div className='postBody'>
            <p>{PostText}</p>
            <img src={`/uploads/${PostPicture}`}/>
        </div>
     );
}
 
export default PostBody;