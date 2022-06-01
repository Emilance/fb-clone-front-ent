import React from 'react';
import { AiOutlineLike } from 'react-icons/ai'
import { GoComment }   from 'react-icons/go'
import { RiShareForwardLine } from 'react-icons/ri' 
import './CommentAndLikes.css'

const CommentAndLikes = () => {
    return ( 
        <div className='CommentAndLikes'>
            <div className='upperCommentAndLikes'>

            </div>
            <div className='lowerCommentAndLikes'>
                <div className='commentAndLikesLogo'>
                        <AiOutlineLike size='20'/>
                        <p>Like</p>
                </div>
                <div className='commentAndLikesLogo'>
                        <GoComment size='20'/>
                        <p>Comment</p>
                </div>
                <div className='commentAndLikesLogo'>
                        <RiShareForwardLine size='20'/>
                        <p>Share</p>
                </div>
            </div>
        </div>
     );
}
 
export default CommentAndLikes;