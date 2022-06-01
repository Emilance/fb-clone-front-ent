import React from 'react';
import PostHeader from './PostHeader';
import image from '../../images/demo3.png'
import PostBody from './PostBody';
import image2 from '../../images/post.png'
import './Post.css'
import CommentAndLikes from './CommentAndLikes';


const Post = () => {
    return ( 
        <div className='post'>
            <PostHeader
                username='Damilola'
                time= "1hr"
                image={image}
            />
            <PostBody
                PostText='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus'
             PostPicture={image2} 
             />
             <CommentAndLikes/>
        </div>
     );
}
 
export default Post;